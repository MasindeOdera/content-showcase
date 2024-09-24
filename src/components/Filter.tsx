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
        <option value="annual-Report">Annual Report</option>
        <option value="branded-content">Branded Content</option>
        <option value="brochure">Brochure</option>
        <option value="case-study">Case Study</option>
        <option value="customer-magazine">Customer Magazine</option>
        <option value="ebook">eBook</option>
        <option value="event-magazine">Event Magazine</option>
        <option value="manual">Manual</option>
        <option value="member-magazine">Member Magazine</option>
        <option value="newsletter">Newsletter</option>
        <option value="pitch-deck">Pitch Deck</option>
        <option value="presentation">Presentaion</option>
        <option value="proposal">Proposal</option>
        <option value="product-catalog">Product Catalog</option>
        <option value="report">Report</option>
        <option value="staff-magazine">Staff Magazine</option>
        <option value="other">Other</option>
      </FilterSelect>
    </Container>
  );
};

export default Filter;
