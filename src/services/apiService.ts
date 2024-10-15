import axios from 'axios';
import { getBearerToken } from './authService.ts';

export const fetchProjects = async (page: number, query: { search: string; category: string }) => {
  const token = await getBearerToken();
  const response = await axios.get(
    `https://api.foleon.com/v2/magazine/title?${new URLSearchParams({
      page: page.toString(),
      limit: '20',
      filter: query.search,
    })}`,
    { headers: { 
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/hal+json'
    } }
  );

  const publications = response.data._embedded?.title || [];
  const data = response.data;
  console.log('fetchProjects: ', {response});

  return {
    data: data,
    items: publications,
    totalPages: response.data.page_count,
  };
};

// Fetch a single publication detail
export const fetchPublicationDetail = async (id: string) => {
  const token = await getBearerToken();
  const response = await axios.get(
    `https://api.foleon.com/v2/magazine/edition/${id}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const fetchFilteredProjects = async (
  page: number,
  query: { search: string; category: string }
) => {
  const token = await getBearerToken();
  
  // Create an array to hold the filters
  const filters = [];

  // Add search filter (if search query exists)
  if (query.search) {
    filters.push(`filter[0][field]=name&filter[0][type]=eq&filter[0][value]=${query.search}`);
  }

  // Add category filter (if category filter exists)
  if (query.category) {
    filters.push(`filter[1][field]=created_on&filter[1][type]=eq&filter[1][value]=${query.category}`);
  }

  // Combine all filters into a query string
  const filterQuery = filters.length > 0 ? `&${filters.join('&')}` : '';

  // Make the API request with the filters
  const response = await axios.get(
    `https://api.foleon.com/v2/magazine/title?page=${page}&limit=20${filterQuery}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  // Extract publications from the response
  const publications = response.data._embedded?.title || [];
  console.log('fetchPublicationDetail: ', {response});
  return {
    items: publications,
    totalPages: response.data.page_count,
  };
};
