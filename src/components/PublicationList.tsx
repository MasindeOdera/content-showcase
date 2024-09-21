import React from 'react';
import { Publication } from '../types/publication';

interface PublicationListProps {
    publications: Publication[];
}

const PublicationList: React.FC<PublicationListProps> = ({ publications }) => {
  return (
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
  );
};

export default PublicationList;
