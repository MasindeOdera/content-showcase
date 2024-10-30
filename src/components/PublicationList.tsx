import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { ResultsContainer, FlexContainer } from './styles/container/container.ts';
import { Card } from './styles/card/card.styles.ts';
import Loader from './Loader.tsx';
import { useDelayedLoading } from '../hooks/useDelayedLoading.ts';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils.ts';


const PublicationList: React.FC = () => {
  const { t } = useTranslation();
  const publications = useSelector((state: RootState) => state.publications.items);
  const loading = useSelector((state: RootState) => state.publications.loading);
  const searchQuery = useSelector((state: RootState) => state.publications.search);
  const filterCategory = useSelector((state: RootState) => state.publications.category);


  //Use the hook with 2 second delay
  const loadingWithDelay = useDelayedLoading(loading, 2000);

  if (loadingWithDelay) {
    return (<ResultsContainer><Loader /></ResultsContainer>);
  }

  if (!searchQuery && !filterCategory && (!publications || publications.length === 0)) {
    return (
      <ResultsContainer>
        <p>{t('publicationlist.suggestion')}</p>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <FlexContainer>
        {publications.length > 0 ? (
          publications.map((publication) => {
            const imageUrl = publication.screenshot || 'https://placehold.co/140x140?text=No+Image';
            const dateModified = formatDate(publication.modified_on);

            return (
              <Card key={publication.id}>
                <Link to={`/publications/${publication.id}`}>
                  <div>
                    <img src={imageUrl} alt={publication.name} title={publication.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3>{publication.name}</h3>
                    <p>{t('publicationlist.status')}<b>{publication.status}</b></p>
                    <p>{t('publicationlist.lastpublished')}<i>{dateModified}</i></p>
                  </div>
                </Link>
              </Card>
            );
          })
        ) : (
          <p>{t('publicationlist.notfound')}</p>
        )}
      </FlexContainer>
    </ResultsContainer>
  );
};

export default PublicationList;
