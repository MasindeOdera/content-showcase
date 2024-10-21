import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { ResultsContainer, GridContainer } from './styles/container/container.ts';
import { Card } from './styles/card/card.styles.ts';
import Loader from './Loader.tsx';
import { useDelayedLoading } from '../hooks/useDelayedLoading.ts';
import { Link } from 'react-router-dom';

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
      <GridContainer>
        {publications.length > 0 ? (
          publications.map((publication) => {
            // Use a placeholder image if no screenshot is available
            const imageUrl = publication._embedded?.screenshot?._links?.desktop?.href || 'https://placehold.co/140x140?text=No+Image';

            return (
              <Card key={publication.id}>
                <Link to={`/publications/${publication.id}`}>
                  <div>
                    {/* Display the image or fallback to placeholder */}
                    <img src={imageUrl} alt="Desktop view" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3>{publication.name}</h3>
                    <p>{publication.category} - {publication.id}</p>
                    <p>Number of editions: {publication._computed.editions_count}</p>
                  </div>
                </Link>
              </Card>
            );
          })
        ) : (
          <p>No publications found</p>
        )}
      </GridContainer>
    </ResultsContainer>
  );
};

export default PublicationList;
