import "./App.css";

import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();

  // Fonction pour changer la langue
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("welcome")}</h1>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => changeLanguage("en")}
            style={{ marginRight: "10px" }}
          >
            English
          </button>
          <button onClick={() => changeLanguage("fr")}>Français</button>
        </div>
      </header>
    </div>
  );
}

export default App;
