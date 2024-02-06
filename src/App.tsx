import React, { useState } from "react";
import { useFetchCountryData } from "./data/useFetchCountryData";
import { validateCountryData } from "./data/validateCountryData";
import { DataError } from "./components/DataError";
import "./App.css";
import { useCountryStore } from "./data/country.store";
import { ZodError } from "zod";
import { CountryData } from "./types/CountryData.type";
import { useSaveCountryData } from "./data/useSaveCountryData";
import { CountrySelector } from "./components/CountrySelector";
import { CountryDetails } from "./components/CountryDetails";

function App() {
  const { data: countriesText, loading } = useFetchCountryData();
  const { setCountriesData: setCountyData } = useCountryStore();
  const [validationError, setValidationError] = useState<ZodError<
    CountryData[]
  > | null>(null);
  useSaveCountryData({
    countriesText,
    setCountyData,
    setValidationError,
    validateCountryData,
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (validationError) {
    return <DataError error={validationError} dataName="country" />;
  }

  return (
    <>
      <h1>Country viewer</h1>
      <CountrySelector />
      <CountryDetails />
    </>
  );
}

export default App;
