import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { i18n } from "@lingui/core";

import { I18nProvider } from "@lingui/react";
import { getDetectedLang } from "./utils/getDetectedLang";

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

const getCatalog = async (locale) => {
  const { messages } = await import(`./locales/${locale}/messages.js`);
  return messages;
};
const detectedLang = getDetectedLang();
export const LANGUAGE_KEY = "language";

const LocalizedApp = () => {
  const [catalogs, setCatalogs] = useState({});
  const [appLanguage, setAppLanguage] = useState("");

  async function handleLanguageChange(language) {
    const newCatalog = await getCatalog(language);

    const newCatalogs = { ...catalogs, [language]: newCatalog };

    localStorage.setItem(LANGUAGE_KEY, language);
    setCatalogs(newCatalogs);
    setAppLanguage(language);
  }

  useEffect(() => {
    const persistedLanguage = localStorage.getItem(LANGUAGE_KEY);
    const userHasDifferentStorageLang = persistedLanguage != null && appLanguage !== persistedLanguage;

    const handleLanguageInitUpdate = async (language) => {
      const newCatalog = await getCatalog(language);
      const newCatalogs = { ...catalogs, [language]: newCatalog };
      setCatalogs(newCatalogs);
      setAppLanguage(language);
    };

    if (userHasDifferentStorageLang) {
      handleLanguageInitUpdate(persistedLanguage);
    } else {
      handleLanguageInitUpdate(detectedLang);
    }
  }, []);

  i18n.load(catalogs);
  i18n.activate(appLanguage);

  return (
    <Provider store={store}>
      <I18nProvider i18n={i18n}>
        <App
          handleLanguageChange={handleLanguageChange}
          appLanguage={appLanguage}
        />
      </I18nProvider>
    </Provider>
  );
};

ReactDOM.render(<LocalizedApp />, document.getElementById("root"));
