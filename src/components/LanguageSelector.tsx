import React from 'react';
import { useTranslation } from 'react-i18next';
import ukFlag from '../assets/uk.png';
import nlFlag from '../assets/nl.png';
import frFlag from '../assets/fr.png';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <img
        src={ukFlag}
        alt="English"
        onClick={() => changeLanguage('en')}
      />
      <img
        src={nlFlag}
        alt="Nederlands"
        onClick={() => changeLanguage('nl')}
      />
      <img
        src={frFlag}
        alt="Français"
        onClick={() => changeLanguage('fr')}
      />
    </div>
  );
};

export default LanguageSelector;
