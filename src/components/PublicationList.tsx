import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ResultsContainer } from './styles/container/container';
import Loader from './Loader';
import { useDelayedLoading } from '../hooks/useDelayedLoading';

const PublicationList: React.FC = () => {
  // Fetch publications and loading state from the Redux store
  const publications = useSelector((state: RootState) => state.publications.items);
  const loading = useSelector((state: RootState) => state.publications.loading);

  //Use the hook with 2 second delay
  const loadingWithDelay = useDelayedLoading(loading, 2000);

  // Show loader during the delay.
  if (loadingWithDelay) {
    return (<ResultsContainer><Loader /></ResultsContainer>);
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
