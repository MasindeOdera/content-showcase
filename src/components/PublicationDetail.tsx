import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../store/store.ts';
import { fetchPublicationDetailThunk } from '../store/publicationsSlice.ts';
import Loader from './Loader.tsx';
import { ResultsContainer, LoadingDetailContainer, FlexContainer, AlignLeftContainer } from './styles/container/container.ts';
import { Button } from './styles/button/button.styles.ts';
import { formatDate } from '../utils/dateUtils.ts';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PreviewIcon from '@mui/icons-material/Preview';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PublishIcon from '@mui/icons-material/Publish';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ContactPageIcon from '@mui/icons-material/ContactPage';

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
      <LoadingDetailContainer>
        <Loader />
      </LoadingDetailContainer>
    );
  }

  if (!selectedPublication) {
    return (
      <ResultsContainer>
        <AlignLeftContainer>
          <Button onClick={() => navigate(-1)}>
            <ArrowBackIcon /> Back
          </Button>
        </AlignLeftContainer>
        <p>Publication not found.</p>
      </ResultsContainer>
    );
  }

  const publicationImageUrl = selectedPublication.screenshot || 'https://placehold.co/140x140?text=No+Image';
  const dateCreated = formatDate(selectedPublication.created_on);

  return (
    <ResultsContainer>
      <AlignLeftContainer>
        <Button onClick={() => navigate(-1)}>
          <ArrowBackIcon /> Back
        </Button>
        
        <h1>{selectedPublication.name}</h1>
        <span><b>Category: </b>{selectedPublication.category ? selectedPublication.category : 'Not assigned'}</span>
        <span><b>Status: </b>{selectedPublication.status}</span>
        <span><b>Created on: </b><i>{dateCreated}</i></span>
      </AlignLeftContainer>
      
      <FlexContainer>
        <a href={selectedPublication.preview || '#'} title="preview" target="_blank" rel="noopener noreferrer">
          <PreviewIcon style={{ fontSize: 24, color: '#002B48', cursor: 'pointer' }} />
        </a>
        <a href={selectedPublication.editor || '#'} title="edit" target="_blank" rel="noopener noreferrer">
          <EditNoteIcon style={{ fontSize: 24, color: '#002B48', cursor: 'pointer' }} />
        </a>
        <a href={selectedPublication.publish || '#'} title="publish" target="_blank" rel="noopener noreferrer">
          <PublishIcon style={{ fontSize: 24, color: '#002B48', cursor: 'pointer' }} />
        </a>
        <a href={selectedPublication.personalize || '#'} title="personalize" target="_blank" rel="noopener noreferrer">
          <SettingsAccessibilityIcon style={{ fontSize: 24, color: '#002B48', cursor: 'pointer' }} />
        </a>
        <a href={selectedPublication.published || '#'} title="published" target="_blank" rel="noopener noreferrer">
          <PublishedWithChangesIcon style={{ fontSize: 24, color: '#002B48', cursor: 'pointer' }} />
        </a>
        <a href={selectedPublication.self || '#'} title="edition" target="_blank" rel="noopener noreferrer">
          <ContactPageIcon style={{ fontSize: 24, color: '#002B48', cursor: 'pointer' }} />
        </a>
      </FlexContainer>
      {publicationImageUrl && (
        <img src={publicationImageUrl} alt="Image" title={selectedPublication.name} style={{ maxWidth: '100%' }} />
      )}
    </ResultsContainer>
  );
};

export default PublicationDetail;
