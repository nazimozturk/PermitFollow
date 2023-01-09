import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url,id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.post(url,id);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url,id]);

  return { data, loading, error };
};

export default useFetch;