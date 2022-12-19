import React, { useState } from "react";
import {Logo} from "../img/icons/logo.jsx";
import {Home} from "../img/icons/home.jsx";
import {Shopping_cart}  from "../img/icons/shopping_cart.jsx";
import {Megaphone} from "../img/icons/megaphone.jsx";
import {Pie_chart} from "../img/icons/pie_chart.jsx";
import {Wallet} from "../img/icons/wallet.jsx";
import {Profile} from "../img/icons/profile.jsx";
import {Information} from "../img/icons/information.jsx";
import {Multimedia} from "../img/icons/multimedia.jsx";
import {Logout} from "../img/icons/logout.jsx";
import { Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/sidebar.module.scss";

export default function Sidebar() {
  const location = useLocation();

  const [links] = useState([
    {
      url: "/",
      name: "Главная",
      icon: <Home/>,
    },
    {
      url: "/shops",
      name: "Мои магазины",
      icon: <Shopping_cart/>,
    },
    {
      url: "/promo",
      name: "Промоматериалы",
      icon: <Megaphone/>,
    },
    {
      url: "/stats",
      name: "Статистика",
      icon: <Pie_chart/>,
    },
    {
      url: "/balance",
      name: "Баланс",
      icon: <Wallet/>,
    },
    {
      url: "/personal",
      name: "Персональные данные",
      icon: <Profile/>,
    },
    {
      url: "/faq",
      name: "FAQ",
      icon: <Information/>,
    },
    {
      url: "/support",
      name: "Техподдержка",
      icon: <Multimedia/>,
    },
    {
      url: "/logout",
      name: "Выход",
      icon: <Logout/>,
    },
  ]);

  return (
    <div className={`d-flex flex-column col-3 ${styles.sidebar}`}>
      <div className={`${styles.sidebar__header}`}>
        <Logo/>
      </div>

      <div className={`d-flex flex-column ${styles.sidebar__links}`}>
        {links.map((link, i) => {
          const { url, name, icon } = link;
          return (
            <Link
              to={`${url}`}
              key={url}
              className={
                location.pathname === url ? styles.link_active : undefined
              }
            >
              {icon}
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
