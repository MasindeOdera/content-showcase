import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setFilter } from '../store/publicationsSlice';
import FilterSelect from './styles/select/select';
import Container from './styles/container/container';


const Filter: React.FC = () => {
  const dispatch = useDispatch();

  // Get the current category from Redux store
  const selectedCategory = useSelector((state: RootState) => state.publications.category);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Update the Redux store with new filter category.
    dispatch(setFilter(event.target.value));
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
