import axios from "axios";
import { useEffect, useState } from "react";

// useEffect cleanup function
// https://hackernoon.com/cleanup-functions-in-reacts-useeffect-hook-explained   - vgood
// https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/ - vgood with useReducer
// https://dev.to/pallymore/clean-up-async-requests-in-useeffect-hooks-90h

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    // return cleanup function
    // suppose the state is still loading then you can cancel the fetch data call
  }, [url]);

  return { isLoading, apiData, serverError };
}
