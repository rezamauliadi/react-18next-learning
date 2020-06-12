import React, { useState } from "react";
import "./App.css";

import { Layout, Radio } from "antd";

import { useTranslation } from "react-i18next";

function App() {
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  function changeLanguage(e) {
    const code = e.target.value;

    if (i18n.language !== code) {
      i18n.changeLanguage(code);
      setLanguage(code);
    }
  }

  return (
    <Layout className="page">
      <Layout.Content className="page__container">
        <div className="page__languages">
          <p>Select language:</p>
          <Radio.Group defaultValue={language} onChange={changeLanguage}>
            <Radio.Button value="en">English</Radio.Button>
            <Radio.Button value="fr">France</Radio.Button>
            <Radio.Button value="de">German</Radio.Button>
            <Radio.Button value="id">Indonesian</Radio.Button>
          </Radio.Group>
        </div>

        <div className="page__content">
          <h2>{t("title")}</h2>
          <p>{t("content")}</p>
          <p className="page__content__source">
            {t("source")}
            <a href="https://en.wikipedia.org/wiki/Earth">
              https://en.wikipedia.org/wiki/Earth
            </a>
          </p>
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default App;
