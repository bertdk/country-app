import { object, string, number, boolean, array } from "zod";

const countrySchema = object({
  country: string(),
  population: number(),
  isCapital: boolean(),
  city: string(),
});

export const validateCountryData = (data: string) => {
  const dataArraySchema = array(countrySchema);
  return dataArraySchema.safeParse(data);
};
