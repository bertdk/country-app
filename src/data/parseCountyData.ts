import { CityData } from "../types/CityData.type";
import { CountryData } from "../types/CountryData.type";

/**
 * Parses the raw county data into an object with the county as the key and the value as an array of cities.
 */
export function parseCountryData(data: CountryData[]) {
  const result: Record<string, CityData[]> = {};
  for (const { country, ...city } of data) {
    if (result[country]) {
      result[country].push(city);
    } else {
      result[country] = [city];
    }
  }
  return result;
}
