import { useEffect, useState } from "react";

export function useFetchConvertedCash(currency) {
  const [country1, setCountry1] = useState("USD");
  const [country2, setCountry2] = useState("USD");

  const [convertedCurrency, setConvertedCurrency] = useState("");

  useEffect(function () {
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
        // console.log(
        //   Object.entries(data.rates).map((x) => {
        //     return {
        //       label: x[0],
        //       rate: x[1],
        //     };
        //   })
        // );
      } catch (err) {
        console.error(err);
      }
    }
    convertCurrency();
  });
  return {
    setCountry1,
    setCountry2,
    currency,
    convertedCurrency,
    country1,
    country2,
  };
}
