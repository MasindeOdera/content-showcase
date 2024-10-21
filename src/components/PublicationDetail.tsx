import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; // Assuming you are using react-router for routing
import { RootState, AppDispatch } from '../store/store.ts';
import { fetchPublicationDetailThunk } from '../store/publicationsSlice.ts';
import Loader from './Loader.tsx';
import { ResultsContainer } from './styles/container/container.ts';
import { Button } from './styles/button/button.styles.ts';

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
        <p>Publication not found.</p>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <Button onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <h1>{selectedPublication.name}</h1>
      <p>Category: {selectedPublication.category}</p>
      <p>Number of Editions: {selectedPublication._computed?.editions_count}</p>
      <p>Published Date: {selectedPublication.created_on}</p>
      {/* Add other details you want to show here */}
    </ResultsContainer>
  );
};

export default PublicationDetail;
