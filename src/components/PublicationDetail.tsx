import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../store/store.ts';
import { fetchPublicationDetailThunk } from '../store/publicationsSlice.ts';
import Loader from './Loader.tsx';
import { DetailsContainer, LoadingDetailContainer, FlexContainer, AlignLeftContainer } from './styles/container/container.ts';
import Button from './styles/button/button.ts';
import IconWrapper from './styles/icon/icon.ts';
import { formatDate } from '../utils/dateUtils.ts';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PreviewIcon from '@mui/icons-material/Preview';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PublishIcon from '@mui/icons-material/Publish';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const PublicationDetail: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const selectedPublication = useSelector((state: RootState) => state.publications.selectedPublication);
  const loading = useSelector((state: RootState) => state.publications.loading);

  const navigate = useNavigate();

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
      <DetailsContainer>
        <AlignLeftContainer>
          <Button onClick={() => navigate(-1)}>
            <ArrowBackIcon /> {t('publicationdetail.back')}
          </Button>
        </AlignLeftContainer>
        <p>{t('publicationlist.notfound')}.</p>
      </DetailsContainer>
    );
  }

  const publicationImageUrl = selectedPublication.screenshot || 'https://placehold.co/140x140?text=No+Image';
  const dateCreated = formatDate(selectedPublication.created_on);

  return (
    <DetailsContainer>
      <AlignLeftContainer>
        <Button onClick={() => navigate(-1)}>
          <ArrowBackIcon /> {t('publicationdetail.back')}
        </Button>
        
        <h1>{selectedPublication.name}</h1>
        <span><b>{t('publicationdetail.category')}</b>{selectedPublication.category ? selectedPublication.category : 'Not assigned'}</span>
        <span><b>{t('publicationdetail.status')}</b>{selectedPublication.status}</span>
        <span><b>{t('publicationdetail.created')}</b><i>{dateCreated}</i></span>
      </AlignLeftContainer>
      
      <FlexContainer>
        <a href={selectedPublication.preview || '#'} title="preview" target="_blank" rel="noopener noreferrer">
          <IconWrapper><PreviewIcon fontSize="inherit" /></IconWrapper>
        </a>
        <a href={selectedPublication.editor || '#'} title="edit" target="_blank" rel="noopener noreferrer">
          <IconWrapper><EditNoteIcon fontSize="inherit" /></IconWrapper>
        </a>
        <a href={selectedPublication.publish || '#'} title="publish" target="_blank" rel="noopener noreferrer">
          <IconWrapper><PublishIcon fontSize="inherit" /></IconWrapper>
        </a>
        <a href={selectedPublication.personalize || '#'} title="personalize" target="_blank" rel="noopener noreferrer">
          <IconWrapper><SettingsAccessibilityIcon fontSize="inherit" /></IconWrapper>
        </a>
        <a href={selectedPublication.published || '#'} title="published" target="_blank" rel="noopener noreferrer">
          <IconWrapper><PublishedWithChangesIcon fontSize="inherit" /></IconWrapper>
        </a>
        <a href={selectedPublication.self || '#'} title="edition" target="_blank" rel="noopener noreferrer">
          <IconWrapper><ContactPageIcon fontSize="inherit" /></IconWrapper>
        </a>
      </FlexContainer>
      {publicationImageUrl && (
        <img src={publicationImageUrl} alt="Image" title={selectedPublication.name} style={{ maxWidth: '100%' }} />
      )}
    </DetailsContainer>
  );
};

export default PublicationDetail;
