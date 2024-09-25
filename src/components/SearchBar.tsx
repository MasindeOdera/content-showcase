import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setSearchQuery, fetchPublications } from '../store/publicationsSlice';
import Container from './styles/container/container';
import Input from './styles/input/input';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector((state: RootState) => state.publications.search);
  const currentPage = useSelector((state: RootState) => state.publications.currentPage);
  const filterCategory = useSelector((state: RootState) => state.publications.category);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));
    dispatch(fetchPublications({ page: currentPage, query: { search: query, category: filterCategory } }));
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Type to start search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </Container>
  );
};

export default SearchBar;
