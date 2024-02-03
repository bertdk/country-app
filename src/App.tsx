import { useCountryData } from "./data/useCountryData";
import "./App.css";
import { validateCountryData } from "./data/validateCountryData";
import { DataError } from "./components/DataError";

function App() {
  const { data: countriesText, loading } = useCountryData();
  if (loading) {
    return <p>Loading...</p>;
  }

  const validation = validateCountryData(countriesText);

  if (!validation.success) {
    return <DataError error={validation.error} dataName="country" />;
  }

  return (
    <>
      <h1>Country viewer</h1>
      <p>
        <code>{countriesText}</code>
      </p>
    </>
  );
}

export default App;
