import { useCountryStore } from "../data/country.store";

export const CountryDetails = () => {
  const {
    countrySelected,
    citiesSelected,
    populationAverage,
    populationTotal,
  } = useCountryStore();
  if (!countrySelected || !citiesSelected) return null;
  return (
    <div>
      <h2>{countrySelected}</h2>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Population</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {citiesSelected.map((city) => (
            <tr key={city.city}>
              <td>{city.city}</td>
              <td>{city.population}</td>
              <td>{city.isCapital ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>The average population is: {populationAverage}</p>
      <p>The total population is: {populationTotal}</p>
    </div>
  );
};
