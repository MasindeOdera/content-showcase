import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPublicationDetail } from '../services/apiService';

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
  

const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Infer id from URL params
  const [publication, setPublication] = useState<Publication | null>(null);

  useEffect(() => {
    const loadPublicationDetail = async () => {
      if (id) {
        const data = await fetchPublicationDetail(id!);
        setPublication(data);
      }
    };
    loadPublicationDetail();
  }, [id]);

  if (!publication) return <div>Loading...</div>;

  return (
    <div>
      <h1>{publication.name}</h1>
      <p>Category: {publication.category}</p>
      <p>Description: {publication.description}</p>
      {/* Render other details */}
    </div>
  );
};

export default PublicationDetail;
