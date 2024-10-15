import { useState, useEffect } from 'react';

export const useDelayedLoading = (loading: boolean, delay: number = 2000) => {
  const [loadingWithDelay, setLoadingWithDelay] = useState(loading);

  useEffect(() => {
    if (loading) {
      setLoadingWithDelay(true);
    } else {
      const timer = setTimeout(() => {
        setLoadingWithDelay(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [loading, delay]);

  return loadingWithDelay;
};
