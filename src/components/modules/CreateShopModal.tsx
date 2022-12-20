import React, { useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { Warning } from "../../img/icons/warning";
import styles from "styles/createshop.module.scss";

interface IModalProps {
  showModal: boolean,
  showHandler: React.Dispatch<React.SetStateAction<boolean>>,
  addShop:(domain:string)=>void
}

export const CreateShopModal = ({showModal,showHandler,addShop}:IModalProps) => {
  const [domainIsValid,setDomainIsValid] = useState<{isValid:boolean,val:string}>({isValid:true,val:''});
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


  const handleForm = (name:string,e:React.ChangeEvent<HTMLSelectElement>) => {
    const index = formData.findIndex((item:any)=>item.name === name)
    console.log(index);
    const newFormData = [...formData];
    newFormData[index].value = e.target.value;
    setFormData(newFormData);
 }

 const handleDomainInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
  const val = e.target.value.toLowerCase();
  const isValid = !val.includes("work5") && !val.match(/\s/gm);
  setTimeout(()=>{
    setDomainIsValid({isValid,val})
  },300)
 }

 const handleAdd = () => {
  addShop(domainIsValid.val);
  showHandler(false)
 }

  return (
    <>
      <Modal
        dialogClassName={`${styles.createShop}`}
        show={showModal}
        onHide={():void=>showHandler(false)}
        centered
      >
        <Modal.Header closeButton className="border-bottom-0 pb-0 mb-5" style={{paddingLeft:"30px",paddingRight:"30px"}}>
          <Modal.Title className="fw-bold">Создать магазин</Modal.Title>
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
                      onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>handleForm(name,e)}
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
              <p>Домен</p>
              <InputGroup>
                <Form.Control
                  placeholder="ivangrozny"
                  aria-label="Domain name"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleDomainInput(e)}}
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
          <Button variant="primary" onClick={(e)=>{
            domainIsValid.isValid ? handleAdd() : undefined}}
          >
            Создать
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
