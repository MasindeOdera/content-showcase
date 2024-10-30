import axios from 'axios';
import { getBearerToken } from './authService.ts';
import { Publication } from '../types/index.ts';


export const fetchPublicationDetail = async (id: string) => {
  const token = await getBearerToken();
  const response = await axios.get(
    `https://api.foleon.com/v2/magazine/edition/${id}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const publication = response.data;

  const mappedPublication: Publication = {
    id: publication.id,
    name: publication.name,
    category: publication.category,
    created_on: publication.created_on,
    modified_on: publication.modified_on ?? '',
    status: publication.status,
    screenshot: publication._embedded?.screenshot?._links?.desktop?.href || '',
    editor: publication._links?.editor?.href || '',
    personalize: publication._links?.personalize?.href || '',
    preview: publication._links?.preview?.href || '',
    publish: publication._links?.publish?.href || '',
    published: publication._links?.published?.href || '',
    self: publication._links?.self?.href || '',
  };
  
  return mappedPublication;
};

export const fetchProjectsByCategory = async (page = 1, limit = 20, newCategory: string) => {
  const token = await getBearerToken();

  if (newCategory === '') {
    return {
      items: [],
      totalPages: 0,
    };
  }

  const queryParams = new URLSearchParams();
  queryParams.append('page', page.toString());
  queryParams.append('limit', limit.toString());

  if(newCategory !== '' && newCategory !== 'all') {
    queryParams.append('filter[0][field]', 'category');
    queryParams.append('filter[0][type]', 'eq');
    queryParams.append('filter[0][value]', newCategory);

    queryParams.append('order-by[0][field]', 'name');
    queryParams.append('order-by[0][type]', 'field');
    queryParams.append('order-by[0][direction]', 'asc');
  }

  const url = `https://api.foleon.com/v2/magazine/edition?${queryParams.toString()}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/hal+json',
    },
  });

  const publications = response.data._embedded?.edition || [];

  const mappedPublications = publications.map((publication: Publication) => ({
    id: publication.id,
    name: publication.name,
    modified_on: publication.modified_on,
    status: publication.status,
    screenshot: publication._embedded?.screenshot?._links?.google?.href || '',
  }));

  return {
    items: mappedPublications,
    totalPages: response.data.page_count,
  };
};

export const searchPublicationsByName = async (page = 1, limit = 20, searchQuery: string) => {
  const token = await getBearerToken();

  if (searchQuery === '') {
    console.error('No search query provided, returning no results.');
    return {
      items: [],
      totalPages: 0,
    };
  }

  const queryParams = new URLSearchParams();
  queryParams.append('page', page.toString());
  queryParams.append('limit', limit.toString());

  if (searchQuery !== '') {
    queryParams.append('filter[0][field]', 'name');
    queryParams.append('filter[0][type]', 'eq');
    queryParams.append('filter[0][value]', searchQuery);
  }

  const url = `https://api.foleon.com/v2/magazine/edition?${queryParams.toString()}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/hal+json',
      },
    });

    const publications = response.data._embedded?.edition || [];
    
    const mappedPublications = publications.map((publication: Publication) => ({
      id: publication.id,
      name: publication.name,
      modified_on: publication.modified_on ?? '',
      status: publication.status,
      screenshot: publication._embedded?.screenshot?._links?.google?.href || '',
    }));

    return {
      items: mappedPublications,
      totalPages: response.data.page_count,
    };
  } catch (error) {
    console.error('Error searching publications by name:', error);
    return {
      items: [],
      totalPages: 0,
    };
  }
};
