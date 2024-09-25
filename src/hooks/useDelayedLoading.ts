import { useState, useEffect } from 'react';

export const useDelayedLoading = (loading: boolean, delay: number = 2000) => {
  const [loadingWithDelay, setLoadingWithDelay] = useState(loading);

  useEffect(() => {
    if (loading) {
      setLoadingWithDelay(true);
    } else {
      const timer = setTimeout(() => {
        setLoadingWithDelay(false);
      }, delay); // Use the passed delay value

      return () => clearTimeout(timer); // Cleanup the timer on unmount or when loading changes
    }
  }, [loading, delay]);

  return loadingWithDelay;
};
