import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store.ts';
import { setFilter } from '../store/publicationsSlice.ts';
import { fetchProjectsByCategory } from '../services/apiService.ts';
import { fetchProjectsByCategoryThunk } from '../store/publicationsSlice.ts';
import FilterSelect from './styles/select/select.ts';
import Container from './styles/container/container.ts';


const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get the current category from Redux store
  const selectedCategory = useSelector((state: RootState) => state.publications.category);
  const filterOptions = useSelector((state: RootState) => state.publications.filterOptions);
  const currentPage = useSelector((state: RootState) => state.publications.currentPage);

  const handleFilterChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Update the Redux store with new filter category.
  
    const newCategory = event.target.value;

    // Update the Redux store with the new filter
    dispatch(setFilter(newCategory));

    // Fetch the projects by the new category
    const filteredProjects = await fetchProjectsByCategory(currentPage, 20, newCategory);

    console.log('Filtered Projects: ', filteredProjects);
  
    dispatch(fetchProjectsByCategoryThunk({ page: currentPage, newCategory }));

  };

  return (
    <Container>
      <label htmlFor="category">Filter by category: </label>
      <FilterSelect id="category" value={selectedCategory} onChange={handleFilterChange}>
        <option value="default">Filter by category</option>
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
