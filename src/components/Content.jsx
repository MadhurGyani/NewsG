import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { setParams, setTotalPage } from '../features/Query/QuerySlice';
import Spinner from './Spinner';
import axios from 'axios';

const API_KEY = 70209ceda9344ca69ad9c255894f9e2b//import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

function Content({ path }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.query.page);
  const value = useSelector((state) => state.query.value);
  const [param, setParam] = useState("country");

  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (path === '/') {
      setParam("country");
      dispatch(setParams("in"));
    } else if (path === '/category') {
      setParam("category");
    } else if (path === '/search') {
      setParam("q");
    }
  }, [path, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
          params: {
            [param]: value,
            page: page,
            apiKey: API_KEY,
          },
        });
        setData(response.data);
        dispatch(setTotalPage({ totalResults: response.data.totalResults }));
      } catch (error) {
        setError(error.message || "Error in fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [value, page, param, dispatch]);

  return (
    <div>
      {isLoading ? 
        <Spinner /> : 
        data.articles ? <Cards articles={data.articles} /> : 
        error ? <div>Error: {error}</div> : 
        <div>No data available</div>
      }
    </div>
  );
}

export default Content;
