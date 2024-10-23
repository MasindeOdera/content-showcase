import axios from 'axios';
import { getBearerToken } from './authService.ts';


export const fetchPublicationDetail = async (id: string) => {
  const token = await getBearerToken();
  const response = await axios.get(
    `https://api.foleon.com/v2/magazine/edition/${id}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const fetchProjectsByCategory = async (page = 1, limit = 20, newCategory: string) => {
  const token = await getBearerToken();

  if (newCategory === '') {
    return {
      items: [],
      totalPages: 0,
    };
  }

  // Only query for pagination
  const queryParams = new URLSearchParams();
  queryParams.append('page', page.toString());
  queryParams.append('limit', limit.toString());

  // Add category filter
  if(newCategory !== '' && newCategory !== 'all') {
    queryParams.append('filter[0][field]', 'category');
    queryParams.append('filter[0][type]', 'eq');
    queryParams.append('filter[0][value]', newCategory);
    console.log('newCategory: ', newCategory);

    // Add ordering (using array notation for order-by)
    queryParams.append('order-by[0][field]', 'name');
    queryParams.append('order-by[0][type]', 'field');
    queryParams.append('order-by[0][direction]', 'asc');
  }

  // Construct the final URL
  const url = `https://api.foleon.com/v2/magazine/edition?${queryParams.toString()}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/hal+json',
    },
  });

  const publications = response.data._embedded?.edition || [];
  console.log('fetchProjectsByCategory: ', response);
  console.log('publications: ', publications);
  console.log('response.data: ', response.data);

  return {
    items: publications,
    totalPages: response.data.page_count,
  };
};

// Function to search publications by name
export const searchPublicationsByName = async (page = 1, limit = 20, searchQuery: string) => {
  const token = await getBearerToken();

  if (searchQuery === '') {
    console.log('No search query provided, returning no results.');
    return {
      items: [],
      totalPages: 0,
    };
  }

  const queryParams = new URLSearchParams();
  queryParams.append('page', page.toString());
  queryParams.append('limit', limit.toString());

  // Add the search filter for the name
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
    console.log('searchPublicationsByName: ', response);
    return {
      items: publications,
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
