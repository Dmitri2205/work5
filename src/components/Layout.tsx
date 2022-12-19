import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./modules/HomePage";
import styles from "styles/layout.module.scss";
import Shops from "./modules/Shops";
import Stats from "./modules/Stats";
import Promo from "./modules/Promo";

interface ILayout {
  children: JSX.Element[];
}

export default function Layout(props: ILayout) {
  const { children } = props;

  return (
    <div className={`d-flex ${styles.layout}`}>
      {children[1]}
      <div className={`d-flex flex-column col-lg-9 ${styles.layout__content}`}>
        {children[0]}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </div>
  );
}
