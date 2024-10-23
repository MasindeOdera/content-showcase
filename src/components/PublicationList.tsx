import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { ResultsContainer, FlexContainer } from './styles/container/container.ts';
import { Card } from './styles/card/card.styles.ts';
import Loader from './Loader.tsx';
import { useDelayedLoading } from '../hooks/useDelayedLoading.ts';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils.ts';


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
      <FlexContainer>
        {publications.length > 0 ? (
          publications.map((publication) => {
            const imageUrl = publication._embedded?.screenshot?._links?.google?.href || 'https://placehold.co/140x140?text=No+Image';
            const formattedDate = formatDate(publication.modified_on);

            return (
              <Card key={publication.id}>
                <Link to={`/publications/${publication.id}`}>
                  <div>
                    <img src={imageUrl} alt={publication.name} title={publication.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3>{publication.name}</h3>
                    <p>Status: <b>{publication.status}</b></p>
                    <p>Last Published: <i>{formattedDate}</i></p>
                  </div>
                </Link>
              </Card>
            );
          })
        ) : (
          <p>No publications found</p>
        )}
      </FlexContainer>
    </ResultsContainer>
  );
};

export default PublicationList;
