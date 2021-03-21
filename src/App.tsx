import React from "react";
import Layout from "./components/layout";
import Home from "./views/home";
import { Language } from "./assets/localization/language";
import LanguageContext from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [language, setLanguage] = React.useState(Language.English);
  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      <Layout>
        <Home />
      </Layout>
    </LanguageContext.Provider>
  );
};

export default App;
