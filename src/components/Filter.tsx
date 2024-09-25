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
  const filterOptions = useSelector((state: RootState) => state.publications.filterOptions);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Update the Redux store with new filter category.
    dispatch(setFilter(event.target.value));
  };

  return (
    <Container>
      <label htmlFor="category">Filter by category: </label>
      <FilterSelect id="category" value={selectedCategory} onChange={handleFilterChange}>
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FilterSelect>
    </Container>
  );
};

export default Filter;
