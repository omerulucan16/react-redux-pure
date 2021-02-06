import countries from "../countryList";
const INITAL_STATE = {
  countryList: countries,
  selectedCountry: "",
};
const reducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "SET_SELECTED_COUNTRY":
      return { ...state, selectedCountry: action.payload };
    default:
      return state;
  }
  return state;
};
export default reducer;
