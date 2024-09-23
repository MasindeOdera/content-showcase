import React, { useState } from 'react';
import { FilterProps } from '../types';
import FilterSelect from './styles/select/select';
import Container from './styles/container/container';


const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <Container>
      <label htmlFor="category">Filter by category: </label>
      <FilterSelect id="category" value={selectedCategory} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="blog">Blog</option>
        <option value="case-study">Case Study</option>
        <option value="brochure">Brochure</option>
        <option value="ebook">eBook</option>
      </FilterSelect>
    </Container>
  );
};

export default Filter;
