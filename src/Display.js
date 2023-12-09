import { useFetchCurrencySymbol } from "./useFetchCurrencySymbols";

export default function Display({
  convertedCurrency,
  currency,
  country1,
  country2,
}) {
  const currencies = useFetchCurrencySymbol();
  console.log(currencies);

  return (
    <div className="display-container">
      <p className="display-text">
        {country1 === country2 && !currency && ""}
        {country1 !== country2 &&
          currency &&
          `${currency}  ${country1} is  ${Number(convertedCurrency).toFixed(
            2
          )} in ${country2} `}
      </p>
    </div>
  );
}
