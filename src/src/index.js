import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n/i18n";
import i18next from "i18next";
import 'antd/dist/reset.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const lang = localStorage.getItem("lang") || "en";

i18next.changeLanguage(lang);
document.documentElement.lang = lang;

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);
