import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPublicationDetail } from '../services/apiService';
import { Publication } from '../types';
  

const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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
