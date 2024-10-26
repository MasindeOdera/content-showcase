export const formatDate = (dateString?: string) => {
  if (!dateString) {
      return 'No date available';
  }
  
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
      return 'Invalid date';
  }
  
  return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
  });
};
