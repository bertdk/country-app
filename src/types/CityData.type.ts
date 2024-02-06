import { CountryData } from "./CountryData.type";

export type CityData = Omit<CountryData, "country">;
