export default function Navigation({
  setCurrency,
  setCountry1,
  setCountry2,
  convertedCurrency,
  currency,
}) {
  return (
    <nav>
      <input
        className="currency-input"
        type="text"
        placeholder="Insert amount"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <div className="nav-flex-container">
        <div>
          <p>Convert From</p>
          <select
            className="selector country1select"
            onChange={(e) => setCountry1(e.target.value)}
          >
            <option value="USD">United States of America</option>
            <option value="EUR">Europe</option>
            <option value="CAD">Canada</option>
            <option value="INR">India / Bhutan</option>
            <option value="AUD">Australia</option>
            <option value="BGN ">Bulgaria</option>
            <option value="BRL">Brazil</option>
            <option value="CHF">Switzerland / Liechtenstein</option>
            <option value="CNY">China</option>
            <option value="CZK">Czechia</option>
            <option value="DKK">Denmark / Greenland / Faroe Islands</option>
            <option value="HKD">Hong Kong</option>
            <option value="HUF">Hungary</option>
            <option value="IDR">Indonesia</option>
            <option value="ILS">Israel</option>
            <option value="ISK">Iceland</option>
            <option value="JPY">Japan</option>
            <option value="KRW">South Korea</option>
            <option value="MXN">Mexico</option>
            <option value="MYR">Malaysia</option>
            <option value="NOK">Norway</option>
            <option value="NZD">New Zealand</option>
            <option value="PHP">Phillipines</option>
            <option value="PLN">Poland</option>
            <option value="RON">Romania</option>
            <option value="SEK">Sweden</option>
            <option value="SGD">Singapore</option>
            <option value="THB">Thailand</option>
            <option value="TRY">Turkey</option>
            <option value="ZAR">South Africa</option>
          </select>
        </div>
        <div>
          <p>Convert To</p>
          <select
            className="selector country2select"
            onChange={(e) => setCountry2(e.target.value)}
          >
            <option value="USD">United States of America</option>
            <option value="EUR">Europe</option>
            <option value="CAD">Canada</option>
            <option value="INR">India / Bhutan</option>
            <option value="AUD">Australia</option>
            <option value="BGN ">Bulgaria</option>
            <option value="BRL">Brazil</option>
            <option value="CHF">Switzerland / Liechtenstein</option>
            <option value="CNY">China</option>
            <option value="CZK">Czechia</option>
            <option value="DKK">Denmark / Greenland / Faroe Islands</option>
            <option value="HKD">Hong Kong</option>
            <option value="HUF">Hungary</option>
            <option value="IDR">Indonesia</option>
            <option value="ILS">Israel</option>
            <option value="ISK">Iceland</option>
            <option value="JPY">Japan</option>
            <option value="KRW">South Korea</option>
            <option value="MXN">Mexico</option>
            <option value="MYR">Malaysia</option>
            <option value="NOK">Norway</option>
            <option value="NZD">New Zealand</option>
            <option value="PHP">Phillipines</option>
            <option value="PLN">Poland</option>
            <option value="RON">Romania</option>
            <option value="SEK">Sweden</option>
            <option value="SGD">Singapore</option>
            <option value="THB">Thailand</option>
            <option value="TRY">Turkey</option>
            <option value="ZAR">South Africa</option>
          </select>
        </div>
        {/* <p>{Number(convertedCurrency).toFixed(2)}</p> */}
      </div>
    </nav>
  );
}
