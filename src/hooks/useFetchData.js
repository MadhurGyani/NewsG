import { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetchData';

const useFetchData = (param, value, page) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetchData(param, value, page);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAsync();
  }, [param, value, page]);

  return { data, isLoading, error };
};

export default useFetchData;
