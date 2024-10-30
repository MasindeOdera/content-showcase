import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store.ts';
import { setSearchQuery } from '../store/publicationsSlice.ts';
import Container from './styles/container/container.ts';
import Input from './styles/input/input.ts';
import { useDebouncedValue } from '../hooks/useDebouncedValue.ts';
import { searchPublicationsByNameThunk } from '../store/publicationsSlice.ts';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector((state: RootState) => state.publications.search);
  const currentPage = useSelector((state: RootState) => state.publications.currentPage);
  const filterCategory = useSelector((state: RootState) => state.publications.category);

  const [inputValue, setInputValue] = useState(searchQuery);

  const debouncedSearchQuery = useDebouncedValue(inputValue, 500);

  useEffect(() => {
    const searchPublications = async () => {
      if (debouncedSearchQuery !== searchQuery) {
        dispatch(setSearchQuery(debouncedSearchQuery));
        dispatch(searchPublicationsByNameThunk({ page: currentPage, name: debouncedSearchQuery }));
      }
    };

    if (debouncedSearchQuery) {
      searchPublications();
    }
  }, [debouncedSearchQuery, searchQuery, dispatch, currentPage, filterCategory]);
 
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
