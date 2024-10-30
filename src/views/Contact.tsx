import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.description')}</p>
    </div>
  );
};

export default Contact;
