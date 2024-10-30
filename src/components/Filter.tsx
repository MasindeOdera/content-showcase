import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store.ts';
import { setFilter } from '../store/publicationsSlice.ts';
import { fetchProjectsByCategoryThunk } from '../store/publicationsSlice.ts';
import FilterSelect from './styles/select/select.ts';
import Container from './styles/container/container.ts';


const Filter: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const selectedCategory = useSelector((state: RootState) => state.publications.category);
  const filterOptions = useSelector((state: RootState) => state.publications.filterOptions);
  const currentPage = useSelector((state: RootState) => state.publications.currentPage);

  const handleFilterChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
  
    const newCategory = event.target.value;

    dispatch(setFilter(newCategory));
  
    dispatch(fetchProjectsByCategoryThunk({ page: currentPage, newCategory }));

  };

  return (
    <Container>
      <FilterSelect id="category" value={selectedCategory} onChange={handleFilterChange}>
        <option value="">{t('filter.default')}</option>
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
