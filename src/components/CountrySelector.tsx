import React from "react";
import { useCountryStore } from "../data/country.store";

export const CountrySelector = () => {
  const { countriesData, setCountrySelected, countrySelected } =
    useCountryStore();
  if (!countriesData) return <p>No countries available</p>;

  const countries = Object.keys(countriesData).sort();
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setCountrySelected({ country, cities: countriesData[country] });
  };

  return (
    <select onChange={onChange}>
      {!countrySelected && <option value={""}>Select a country</option>}
      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};
