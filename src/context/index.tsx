import React from "react";
import { Language } from "../assets/localization/language";

const LanguageContext = React.createContext<{ language: string; setLanguage: Function }>({
  language: Language.English,
  setLanguage: () => {},
});

export default LanguageContext;
