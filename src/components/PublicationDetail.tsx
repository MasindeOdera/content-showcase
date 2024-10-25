import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; // Assuming you are using react-router for routing
import { RootState, AppDispatch } from '../store/store.ts';
import { fetchPublicationDetailThunk } from '../store/publicationsSlice.ts';
import Loader from './Loader.tsx';
import { ResultsContainer } from './styles/container/container.ts';
import { Button } from './styles/button/button.styles.ts';
import { formatDate } from '../utils/dateUtils.ts';

const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const selectedPublication = useSelector((state: RootState) => state.publications.selectedPublication);
  const loading = useSelector((state: RootState) => state.publications.loading);

  const navigate = useNavigate();
  console.log("detail: ", selectedPublication);

  useEffect(() => {
    if (id) {
      dispatch(fetchPublicationDetailThunk(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <ResultsContainer>
        <Loader />
      </ResultsContainer>
    );
  }

  if (!selectedPublication) {
    return (
      <ResultsContainer>
        <Button onClick={() => navigate(-1)}>
          ← Back
        </Button>
        <p>Publication not found.</p>
      </ResultsContainer>
    );
  }

  const publicationImageUrl = selectedPublication.screenshot;
  const dateCreated = formatDate(selectedPublication.created_on);

  return (
    <ResultsContainer>
      <Button onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <h1>{selectedPublication.name}</h1>
      <p>Category: {selectedPublication.category}</p>
      <p>Status: {selectedPublication.status}</p>
      <p>Created on: <i>{dateCreated}</i></p>
      <a href={selectedPublication._links?.comments.href} title='comments'>Comments</a>
      {publicationImageUrl && (
        <img src={publicationImageUrl} alt="Image" title={selectedPublication.name} style={{ maxWidth: '100%' }} />
      )}
    </ResultsContainer>
  );
};

export default PublicationDetail;
