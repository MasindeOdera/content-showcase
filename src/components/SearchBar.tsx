import React, { useState } from 'react';
import { SearchBarProps } from '../types';
import Container from './styles/container/Container';
import Input from './styles/input/Input';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    onSearch(query);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </Container>
  );
};

export default SearchBar;
