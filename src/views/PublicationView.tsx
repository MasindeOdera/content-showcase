import React from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../store/store';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import PublicationList from '../components/PublicationList';
// import { fetchPublications } from '../store/publicationsSlice';

const PublicationView: React.FC = () => {
  // const dispatch = useDispatch<AppDispatch>();

  // Fetch the initial set of publications when the component mounts
  // useEffect(() => {
  //   dispatch(fetchPublications({ page: 1, query: { search: '', category: '' } }));
  // }, [dispatch]);

  return (
    <div>
      <h1>Foleon Publications</h1>
      <SearchBar />
      <Filter />
      <PublicationList />
      <Pagination />
    </div>
  );
};

export default PublicationView;
