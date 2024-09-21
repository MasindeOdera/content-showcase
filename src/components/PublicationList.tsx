import React from 'react';

interface Publication {
    id: string;
    name: string;
    category: string;
    description: string;
    created_on: string;
    modified_on: string;
    _computed: {
        editions_count: number;
        editions_published_count: number;
        background_color: string;
    };
    _links: {
        published: {
        href: string;
        };
        self: {
        href: string;
        };
    };
    _embedded: {
        account: {
        id: number;
        _links: {
            self: {
            href: string;
            };
        };
        };
    };
}

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
