import { useDispatch, useSelector } from "react-redux";
import { setSelectedCountry } from "./Actions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList); //getting counryList from Redux
  const selectedCountry = useSelector((state) => state.selectedCountry);
  
  return (
    <div>
      <ul>
        {countryList.map((
          country //foreach all countryList
        ) => (
          <li
            className={country.alpha3Code === selectedCountry ? "active" : ""} // check which line is active
            onClick={() => dispatch(setSelectedCountry(country.alpha3Code))} // change selectedCoutry after On Click
          >
            {country.name} - Capital : {country.capital}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
