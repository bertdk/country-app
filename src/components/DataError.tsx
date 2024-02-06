import React from "react";
import { ZodError } from "zod";
import { CountryData } from "../types/CountryData.type";

export function DataError(props: {
  error: ZodError<CountryData[]>;
  dataName: string;
}) {
  console.error(props.error);
  return (
    <>
      <p>Failed to load {props.dataName} data</p>
      <ul>
        {props.error.issues.map((e, i) => (
          <li key={i}>{e.message}</li>
        ))}
      </ul>
    </>
  );
}
