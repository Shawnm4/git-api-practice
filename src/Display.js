export default function Display({
  convertedCurrency,
  currency,
  country1,
  country2,
}) {
  return (
    <div className="display-container">
      <p className="display-text">
        {country1 === country2 && !currency && ""}
        {country1 !== country2 &&
          currency &&
          `${currency}  ${country1} is ${convertedCurrency} ${country2} `}
      </p>
    </div>
  );
}
