import { useCountryData } from "./useCountryData";
import "./App.css";

function App() {
  const countriesText = useCountryData();

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
