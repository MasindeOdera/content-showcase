import React, { useState } from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import PublicationList from '../components/PublicationList';
import { usePublications } from '../hooks/usePublications';

const PublicationView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');  // Initial empty search query
  const [filterCategory, setFilterCategory] = useState('');

  const { publications, totalPages } = usePublications(currentPage, {
    search: searchQuery,
    category: filterCategory,
  });

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleSearch = (query: string) => setSearchQuery(query);  // Set actual search query
  const handleFilter = (category: string) => setFilterCategory(category);

  return (
    <div>
      <h1>Foleon Workspace</h1>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      <PublicationList publications={publications} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default PublicationView;
