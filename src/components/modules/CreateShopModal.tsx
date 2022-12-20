import { Warning } from "../../img/icons/warning";
import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "styles/createshop.module.scss";

export const CreateShopModal = (props: any) => {
  const { showModal, showHandler } = props;
  const [formData, setFormData] = useState([
    {
      name: "Шаблон",
      value: "",
      options: ["Стандартный", "Пользовательский", "Расширенный"],
    },
    {
      name: "Цветовая схема",
      value: "",
      options: ["Классическая", "Тёмная", "Светлая", "Системная"],
    },
  ]);

  return (
    <>
      <Modal
        dialogClassName={`${styles.createShop}`}
        show={showModal}
        onHide={null}
        centered
      >
        <Modal.Header closeButton className="border-bottom-0 pb-0 mb-5">
          <Modal.Title>Создать магазин</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.createShop__modalBody}>
          <div
            className={`d-flex flex-column justify-content-between ${styles.modalBody__form}`}
          >
            <div className={`d-flex ${styles.form__selectGroup}`}>
              {formData.map((input, i) => {
                const { name, options } = input;
                return (
                  <label key={name} className="w-50">
                    <p className="mb-1">{name}</p>
                    <Form.Select
                      aria-label={name}
                      className="w-100%"
                      placeholder={name}
                    >
                      {options.map((option, o) => {
                        return (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </label>
                );
              })}
            </div>
            <div className={`mb-5 ${styles.form__input}`}>
              <InputGroup>
                <Form.Control
                  placeholder="ivangrozny"
                  aria-label="Recipient's username with two button addons"
                />
                <Button variant="outline-secondary">.work5.ru</Button>
              </InputGroup>
            </div>
            <div className={`d-flex justify-content-between mb-5 ${styles.form__warning}`}>
              <Warning />
              <p>
                В названии домена разрешены латиница и “-”, запрещается
                использовать словосочетание Work 5. После создания магазина Вы
                сможете прикрутить свой домен (например ivangrozniy.ru).
                Подробнее по <a href="https://work5.ru">ссылке</a>
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer
          className={`justify-content-start border-top-0 pt-0 ${styles.createShop__footer}`}
        >
          <Button variant="secondary" onClick={(e) => showHandler(false)}>
            Отмена
          </Button>
          <Button variant="primary" onClick={null}>
            Создать
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
