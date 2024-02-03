import { ZodError } from "zod";

export function DataError(props: { error: ZodError; dataName: string }) {
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
