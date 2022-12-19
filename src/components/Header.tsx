import React,{useEffect, useState} from "react";
import {Envelop} from "../img/icons/envelope.jsx"
import { Button,Breadcrumb } from "react-bootstrap";
import avatar from "../img/avatar.png";
import styles from "styles/header.module.scss";
import { useLocation } from 'react-router-dom';

export default function Header() {

  const location = useLocation();

  return (
    <div className={`d-flex flex-row justify-content-between px-0 pt-4 pb-3 ${styles.header}`}>
      <Breadcrumb className={styles.header__breadcrumbs}>
        {location.pathname !== "/" ? 
        (
          <>
          <Breadcrumb.Item href="#">Главная</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          {decodeURI(location.search.split("=")[1])}
        </Breadcrumb.Item>
          </>
           ) : null
          }
      </Breadcrumb>
      <div className={`d-flex ${styles.header__controls}`}>
          <Button variant="light" className={`d-flex justify-content-center align-items-center ${styles.envelop}`}><Envelop/></Button>
          <div className={`d-flex align-items-center ${styles.user_panel}`}>
          <figure className="d-inline-flex justify-content-center align-items-center rounded-circle">
          <img src={avatar} alt="avatar"/>
          </figure>
          <p className="my-0 mx-auto">Максим Добжанский</p>
          </div>
      </div>
    </div>
  );
}
