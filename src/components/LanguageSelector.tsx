import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <img
        src="/assets/uk.png"
        alt="English"
        onClick={() => changeLanguage('en')}
        style={{ cursor: 'pointer', width: '24px', margin: '0 8px' }}
      />
      <img
        src="/assets/nl.png"
        alt="Nederlands"
        onClick={() => changeLanguage('nl')}
        style={{ cursor: 'pointer', width: '24px', margin: '0 8px' }}
      />
      <img
        src="/assets/fr.png"
        alt="Français"
        onClick={() => changeLanguage('fr')}
        style={{ cursor: 'pointer', width: '24px', margin: '0 8px' }}
      />
    </div>
  );
};

export default LanguageSelector;
