import { useState, useEffect } from "react";

export const useCountryData = () => {
  const [data, setData] = useState("Loading...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/countries.json");
      const jsonData = await response.text();
      setData(jsonData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};
