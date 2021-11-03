import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { i18n } from "@lingui/core";

import { getDetectedLang } from "./utils/getDetectedLang";
import { updateLang } from "./features/langSlice";
import { selectLang } from "./selectors/lang";
import AppContent from "./components/AppContent";
import { I18nProvider } from "@lingui/react";

const getCatalog = async (locale) => {
  const { messages } = await import(`./locales/${locale}/messages.js`);
  return messages;
};
const detectedLang = getDetectedLang();
const LANGUAGE_KEY = "language";

export const LocalizedApp = () => {
  const dispatch = useDispatch();
  const appLanguage = useSelector(selectLang);
  const [catalogs, setCatalogs] = useState({});

  async function handleLanguageChange(language) {
    const newCatalog = await getCatalog(language);

    const newCatalogs = { ...catalogs, [language]: newCatalog };

    localStorage.setItem(LANGUAGE_KEY, language);
    setCatalogs(newCatalogs);
    dispatch(updateLang(language));
  }

  useEffect(() => {
    const persistedLanguage = localStorage.getItem(LANGUAGE_KEY);
    const userHasDifferentStorageLang =
      persistedLanguage != null && appLanguage !== persistedLanguage;

    const handleLanguageInitUpdate = async (language) => {
      const newCatalog = await getCatalog(language);
      const newCatalogs = { ...catalogs, [language]: newCatalog };
      setCatalogs(newCatalogs);
      dispatch(updateLang(language));
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
    <I18nProvider i18n={i18n}>
      <AppContent
        handleLanguageChange={handleLanguageChange}
        appLanguage={appLanguage}
      />
    </I18nProvider>
  );
};
