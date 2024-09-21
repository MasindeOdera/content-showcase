import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../services/apiService';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import Filter from './Filter';

interface Publication {
  id: string;
  name: string;
  category: string;
  description: string;
  created_on: string;
  modified_on: string;
  _computed: {
    editions_count: number;
    editions_published_count: number;
    background_color: string;
  };
  _links: {
    published: {
      href: string;
    };
    self: {
      href: string;
    };
  };
  _embedded: {
    account: {
      id: number;
      _links: {
        self: {
          href: string;
        };
      };
    };
  };
}

const PublicationList: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);  // Initialize as empty array
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');  // Initial empty search query
  const [filterCategory, setFilterCategory] = useState('');
  const [totalPages, setTotalPages] = useState(1);

  // Debounced search state to avoid calling API on every keystroke
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
    // Set a timer to delay the API call
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler); // Clear the timeout on unmount or search change
    };
  }, [searchQuery]);

  useEffect(() => {
    const loadPublications = async () => {
      try {
        if (!debouncedSearchQuery && !filterCategory) return; // Avoid API call if both are empty

        const query = {
          search: debouncedSearchQuery,  // Use the debounced search query
          category: filterCategory,
        };

        const data = await fetchProjects(currentPage, query);  // Ensure correct signature
        setPublications(data.items || []);  // Set as empty array if data.items is undefined
        setTotalPages(data.totalPages || 1);  // Ensure default value
        console.log("data: ", data);
        console.log("debouncedSearchQuery: ", debouncedSearchQuery);
        console.log("filterCategory: ", filterCategory);
      } catch (error) {
        console.error('Failed to fetch publications:', error);
        setPublications([]);  // Ensure empty array on error
      }
    };

    loadPublications();
  }, [currentPage, debouncedSearchQuery, filterCategory]);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleSearch = (query: string) => setSearchQuery(query);  // Set actual search query
  const handleFilter = (category: string) => setFilterCategory(category);

  return (
    <div>
      <h1>Publications</h1>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />

      <ul>
        {publications.length > 0 ? (
          publications.map((publication) => (
            <li key={publication.id}>
              <div>{publication.name} ({publication.category}) -{publication.id}</div>
              <div>Number of editions: {publication._computed.editions_count}</div>
            </li>
          ))
        ) : (
          <li>No publications found</li>
        )}
      </ul>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default PublicationList;
