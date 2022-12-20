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
import { Link, useLocation } from "react-router-dom";
import styles from "styles/sidebar.module.scss";

export default function Sidebar({menuOpened,handleOpen}) {
  const location = useLocation();

  const [links] = useState([
    {
      url: "/",
      name: "Главная",
      icon: <Home/>,
    },
    {
      url: "/shops?title=Мои магазины",
      name: "Мои магазины",
      icon: <Shopping_cart/>,
    },
    {
      url: "/promo?title=Промоматериалы",
      name: "Промоматериалы",
      icon: <Megaphone/>,
    },
    {
      url: "/stats?title=Статистика",
      name: "Статистика",
      icon: <Pie_chart/>,
    },
    {
      url: "/balance?title=Баланс",
      name: "Баланс",
      icon: <Wallet/>,
    },
    {
      url: "/personal?title=Персональные данные",
      name: "Персональные данные",
      icon: <Profile/>,
    },
    {
      url: "/faq?title=FAQ",
      name: "FAQ",
      icon: <Information/>,
    },
    {
      url: "/support?title=Техподдержка",
      name: "Техподдержка",
      icon: <Multimedia/>,
    },
    {
      url: "/logout?title=Выход",
      name: "Выход",
      icon: <Logout/>,
    },
  ]);

  return (
    <div className={`${menuOpened ? "d-flex" : "d-none"} d-lg-flex flex-column col-sm-5 col-md-4 col-12 ${styles.sidebar}`}>
      <span className={styles.sidebar__burger} onClick={e=>handleOpen(false)}></span>
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
                location.pathname === url.split("?")[0] ? styles.link_active : undefined
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
