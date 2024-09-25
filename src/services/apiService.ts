import axios from 'axios';
import { getBearerToken } from './authService';

export const fetchProjects = async (page: number, query: { search: string; category: string }) => {
  const token = await getBearerToken();
  const response = await axios.get(
    `https://api.foleon.com/v2/magazine/title?${new URLSearchParams({
      page: page.toString(),
      limit: '20',
      filter: query.search,
    })}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  // Extract publications from the response (in _embedded.title)
  const publications = response.data._embedded?.title || [];
  const data = response.data;
  console.log({data});
  console.log({publications});
  console.log({response});

  return {
    data: data,
    items: publications, // Array of publications
    totalPages: response.data.page_count, // Assuming this is the total number of pages
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