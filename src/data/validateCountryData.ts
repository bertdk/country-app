import { object, string, number, boolean, array } from "zod";

const countrySchema = object({
  country: string(),
  population: number(),
  isCapital: boolean(),
  city: string(),
});

export const validateCountryData = (data: string) => {
  const dataArraySchema = array(countrySchema);
  const validation = dataArraySchema.safeParse(JSON.parse(data));
  if (!validation.success) {
    console.error(validation.error);
  }
  return validation;
};
