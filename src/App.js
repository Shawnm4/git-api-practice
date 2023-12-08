// import "./App.css";

import { useEffect, useState } from "react";
import { useFetchConvertedCash } from "./useFetchConvertedCash";

import Navigation from "./Navigation";
import Display from "./Display";

export default function App() {
  return <Main />;
}

function Main() {
  const [currency, setCurrency] = useState("");
  const { setCountry1, setCountry2, convertedCurrency, country1, country2 } =
    useFetchConvertedCash(currency);
  return (
    <div className="page-container">
      <div>
        {/* <img className="world-img" src="./world-map2.jpeg" alt="world map" /> */}
        <Navigation
          setCurrency={setCurrency}
          setCountry1={setCountry1}
          setCountry2={setCountry2}
          convertedCurrency={convertedCurrency}
          currency={currency}
        />
        <Display
          convertedCurrency={convertedCurrency}
          currency={currency}
          country1={country1}
          country2={country2}
        />
      </div>
    </div>
  );
}
