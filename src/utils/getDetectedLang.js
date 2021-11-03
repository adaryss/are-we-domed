import { detect, fromNavigator } from "@lingui/detect-locale";

const DEFAULT_LANG = "en";

export const getDetectedLang = () => {
  const detectedLang = detect(fromNavigator(), DEFAULT_LANG).split("-")[0];

  if (detectedLang === "cs" || detectedLang === "en") {
    return detectedLang;
  }

  return "en";
};
