import { create } from "zustand";
import { CityData } from "../types/CityData.type";
import { CountryData } from "../types/CountryData.type";
import { parseCountryData as parseCountriesData } from "./parseCountyData";
import { calculatePopulationStats } from "./calculatePopulationStats";

type CountyStore = {
  countriesData: Record<string, CityData[]> | null;
  countrySelected: string | null;
  citiesSelected: CityData[] | null;
  populationAverage: number | null;
  populationTotal: number | null;
  setCountriesData: (data: CountryData[]) => void;
  setCountrySelected: (data: { country: string; cities: CityData[] }) => void;
};

export const useCountryStore = create<CountyStore>((set) => ({
  countriesData: null,
  countrySelected: null,
  citiesSelected: null,
  populationAverage: null,
  populationTotal: null,
  setCountriesData: (data) => {
    const countriesData = parseCountriesData(data);
    set({ countriesData });
  },
  setCountrySelected: (data) => {
    const { total, average } = calculatePopulationStats(data.cities);
    set({
      countrySelected: data.country,
      citiesSelected: data.cities,
      populationTotal: total,
      populationAverage: average,
    });
  },
}));
