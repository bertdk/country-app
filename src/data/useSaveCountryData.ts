import { useEffect } from "react";
import { CountryData } from "../types/CountryData.type";
import { SafeParseReturnType, ZodError } from "zod";

type PropsType = {
  countriesText: string;
  setCountyData: (data: CountryData[]) => void;
  validateCountryData: (
    data: string
  ) => SafeParseReturnType<CountryData[], CountryData[]>;
  setValidationError: (error: ZodError<CountryData[]>) => void;
};

export const useSaveCountryData = ({
  countriesText,
  setCountyData,
  validateCountryData,
  setValidationError,
}: PropsType) => {
  useEffect(() => {
    if (countriesText) {
      const validation = validateCountryData(countriesText);
      if (validation.success) {
        setCountyData(validation.data);
      } else {
        setValidationError(validation.error);
      }
    }
  }, [countriesText, setCountyData, setValidationError, validateCountryData]);
};
