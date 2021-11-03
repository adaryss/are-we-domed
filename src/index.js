import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { LocalizedApp } from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

const App = () => (
  <Provider store={store}>
    <LocalizedApp />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
