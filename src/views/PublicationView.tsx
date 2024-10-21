import React from 'react';
import Pagination from '../components/Pagination.tsx';
import SearchBar from '../components/SearchBar.tsx';
import Filter from '../components/Filter.tsx';
import PublicationList from '../components/PublicationList.tsx';
import { ControlBarContainer } from '../components/styles/container/container.ts';

const PublicationView: React.FC = () => {

  return (
    <div>
      <h1>Foleon Publications</h1>
      <ControlBarContainer>
        <SearchBar />
        <Filter />
      </ControlBarContainer>
      <PublicationList />
      <Pagination />
    </div>
  );
};

export default PublicationView;
