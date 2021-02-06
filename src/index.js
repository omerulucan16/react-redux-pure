import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
/* All Redux Impor Files */
import { Provider } from "react-redux";
import reducer from "./Reducers/index";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
/* All Redux Impor Files */
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
