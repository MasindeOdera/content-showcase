/* Custom Hook to handle fetching the publications data, managing pagination, 
search, and filter logic. */

import { useState, useEffect } from 'react';
import { fetchProjects } from '../services/apiService';
import { Publication } from '../types/publication';

interface QueryParams {
  search: string;
  category: string;
}

export const usePublications = (currentPage: number, queryParams: QueryParams) => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  // Debounced search state to avoid calling API on every keystroke
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(queryParams.search);

  // Debounce logic for search query
  useEffect(() => {
    // Set a timer to delay the API call
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(queryParams.search);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler); // Clear the timeout on unmount or search change
    };
  }, [queryParams.search]);

  // Fetch data on change of page, search, or filter category
  useEffect(() => {
    const loadPublications = async () => {
      try {
        if (!debouncedSearchQuery && !queryParams.category) return; // Skip API call if both are empty

        const query = {
          search: debouncedSearchQuery,     // Use the debounced search query
          category: queryParams.category,
        };

        const data = await fetchProjects(currentPage, query);   // Ensure correct signature
        setPublications(data.items || []);  // Set as empty array if data.items is undefined
        setTotalPages(data.totalPages || 1);    // Ensure default value
        console.log("data: ", data);
        console.log("debouncedSearchQuery: ", debouncedSearchQuery);
        console.log("Category: ", query.category);
      } catch (error) {
        console.error('Failed to fetch publications:', error);
        setPublications([]);
      }
    };

    loadPublications();
  }, [currentPage, debouncedSearchQuery, queryParams.category]);

  return { publications, totalPages };
};
