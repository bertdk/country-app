import { useState, useEffect } from "react";

export const useCountryData = () => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/countries.json");
      const jsonData = await response.text();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return data;
};
