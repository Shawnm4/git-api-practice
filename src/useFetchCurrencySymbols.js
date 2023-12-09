import { useEffect, useState } from "react";

export function useFetchCurrencySymbol() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function getCurrencies() {
      const res = await fetch("/currencies");
      const data = await res.json();
      setCurrencies(data);
      console.log(data);
    }
    getCurrencies();
  }, []);
  return currencies;
}
