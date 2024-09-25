import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setSearchQuery, fetchPublications } from '../store/publicationsSlice';
import Container from './styles/container/container';
import Input from './styles/input/input';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector((state: RootState) => state.publications.search);
  const currentPage = useSelector((state: RootState) => state.publications.currentPage);
  const filterCategory = useSelector((state: RootState) => state.publications.category);

  const [inputValue, setInputValue] = useState(searchQuery);

  // Debounced search query value, 500ms
  const debouncedSearchQuery = useDebouncedValue(inputValue, 500);

  // Update the Redux state and fetch publications based on the debounced value
  useEffect(() => {
    if (debouncedSearchQuery !== searchQuery) {
      dispatch(setSearchQuery(debouncedSearchQuery));
      dispatch(fetchPublications({ page: currentPage, query: { search: debouncedSearchQuery, category: filterCategory } }));
    }
  }, [debouncedSearchQuery, searchQuery, dispatch, currentPage, filterCategory]);
 
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the input value
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Type to start search..."
        value={inputValue}
        onChange={handleSearchChange}
      />
    </Container>
  );
};

export default SearchBar;
