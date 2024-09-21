import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchBarProps } from '../types';

const SearchContainer = styled.div`
  margin-bottom: 20px;
  box-sizing: border-box;
  flex: 1 1 0%;
  display: flex;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    onSearch(query);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;
