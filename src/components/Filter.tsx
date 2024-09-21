import React, { useState } from 'react';
import styled from 'styled-components';
import { FilterProps } from '../types';

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const FilterSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <FilterContainer>
      <label htmlFor="category">Filter by category: </label>
      <FilterSelect id="category" value={selectedCategory} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="blog">Blog</option>
        <option value="case-study">Case Study</option>
        <option value="brochure">Brochure</option>
        <option value="ebook">eBook</option>
      </FilterSelect>
    </FilterContainer>
  );
};

export default Filter;
