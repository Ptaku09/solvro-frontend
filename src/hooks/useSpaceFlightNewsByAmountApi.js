import { useEffect, useState } from 'react';
import axios from 'axios';

const useSpaceFlightNewsByAmountApi = (initialState = 10) => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(initialState);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${amount}`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [amount]);

  return [data, isLoading, isError, setAmount];
};

export default useSpaceFlightNewsByAmountApi;
