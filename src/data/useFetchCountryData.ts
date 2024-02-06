import { useState, useEffect } from "react";

export const useFetchCountryData = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/countries.json");
      const textResponse = await response.text();
      setData(textResponse);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};
