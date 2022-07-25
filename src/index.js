import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import Slider from "./App/components/Slider/Slider";
import Archives from "./App/components/Archives/archives";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Store/Reducer";
import reportWebVitals from "./reportWebVitals";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composeEnhancers);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store} >
    <Archives/>
    <Slider />
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
