import React from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import PublicationList from '../components/PublicationList';

const PublicationView: React.FC = () => {

  return (
    <div>
      <h1>Foleon Publications</h1>
      <SearchBar />
      <Filter />
      <PublicationList />
      <Pagination />
    </div>
  );
};

export default PublicationView;
