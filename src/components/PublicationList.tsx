import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { ResultsContainer } from './styles/container/container.ts';
import Loader from './Loader.tsx';
import { useDelayedLoading } from '../hooks/useDelayedLoading.ts';

const PublicationList: React.FC = () => {
  // Fetch publications and loading state from the Redux store
  const publications = useSelector((state: RootState) => state.publications.items);
  const loading = useSelector((state: RootState) => state.publications.loading);
  const searchQuery = useSelector((state: RootState) => state.publications.search);
  const filterCategory = useSelector((state: RootState) => state.publications.category);


  //Use the hook with 2 second delay
  const loadingWithDelay = useDelayedLoading(loading, 2000);

  // Show loader during the delay.
  if (loadingWithDelay) {
    return (<ResultsContainer><Loader /></ResultsContainer>);
  }

  // Show placeholder if no search or filter is applied
  if (!searchQuery && !filterCategory && (!publications || publications.length === 0)) {
    return (
      <ResultsContainer>
        <p>Please use the Filter or Search to see the publications.</p>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <ul>
        {publications.length > 0 ? (
          publications.map((publication) => (
            <li key={publication.id}>
              <div>
                {publication.name} ({publication.category}) - {publication.id}
              </div>
              <div>Number of editions: {publication._computed.editions_count}</div>
            </li>
          ))
        ) : (
          <li>No publications found</li>
        )}
      </ul>
    </ResultsContainer>
  );
};

export default PublicationList;
