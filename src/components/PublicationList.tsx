import React from 'react';
import { Publication } from '../types/publication';
import { ResultsContainer } from './styles/container/container';

interface PublicationListProps {
    publications: Publication[];
}

const PublicationList: React.FC<PublicationListProps> = ({ publications }) => {
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
