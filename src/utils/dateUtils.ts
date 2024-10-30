import i18n from 'i18next';

export const formatDate = (dateString?: string) => {
  if (!dateString) {
      return 'No date available';
  }
  
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
      return 'Invalid date';
  }

  const currentLang = i18n.language || 'en';
  
  return date.toLocaleString(currentLang, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
  });
};
