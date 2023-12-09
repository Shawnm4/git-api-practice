// import "./App.css";

import { useEffect, useRef, useState } from "react";
import { useFetchConvertedCash } from "./useFetchConvertedCash";

import Navigation from "./Navigation";
import Display from "./Display";
import Logo from "./Logo";
export default function App() {
  return <Main />;
}

function Main() {
  const [currency, setCurrency] = useState("");
  const { setCountry1, setCountry2, convertedCurrency, country1, country2 } =
    useFetchConvertedCash(currency);
  return (
    <div className="container">
      <div className="page-container">
        {/* <img className="world-img" src="./world-map2.jpeg" alt="world map" /> */}
        <Logo />
        <DisplayDetails />
        <Navigation
          setCurrency={setCurrency}
          setCountry1={setCountry1}
          setCountry2={setCountry2}
          convertedCurrency={convertedCurrency}
          currency={currency}
          country1={country1}
          country2={country2}
        />
      </div>
    </div>
  );
}

function DisplayDetails() {
  const apiLink = useRef(null);

  function hoverIn() {
    const link = apiLink.current;

    link.style.backgroundColor = "white";
    link.style.color = "black";
  }
  function hoverOut() {
    const link = apiLink.current;

    link.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    link.style.color = "white";
  }

  return (
    <header className="details">
      See the currency<br></br> conversion between countries<br></br> with
      realtime exchange rates <br></br> using the Frankfurter API{" "}
      <a
        href="https://www.frankfurter.app/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <span
          className="view-api"
          ref={apiLink}
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          View Api
        </span>
      </a>
    </header>
  );
}
