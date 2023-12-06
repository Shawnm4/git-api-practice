// import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [currency, setCurrency] = useState("");
  const [country1, setCountry1] = useState("USD");
  const [country2, setCountry2] = useState("USD");

  const [convertedCurrency, setConvertedCurrency] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function convertCurrency() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${currency}&from=${country1}&to${country2}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          console.log(data);
          setConvertedCurrency(data.rates[country2]);
        } catch (err) {
          console.error(err);
        }
      }
      convertCurrency();
    },
    [country1, country2, currency]
  );

  return (
    <div>
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <select onChange={(e) => setCountry1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setCountry2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{Number(convertedCurrency).toFixed(2)}</p>
    </div>
  );
}

export default App;
