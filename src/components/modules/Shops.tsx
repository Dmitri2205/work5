import React, { useState } from "react";
import { Button, Form, InputGroup, Row, Table } from "react-bootstrap";
import { Pencil } from "../../img/icons/pencil.jsx";
import { Cancel } from "../../img/icons/cancel.jsx";
import styles from "styles/pages_styles/shops.module.scss";

export default function Shops(props: any){
    const {modalHandler,showModal,tableItems,handleShopChange,removeShop} = props;

    const [edditingField,setEdditingField] =  useState<boolean | undefined>(undefined);
    const [newField,setNewField] = useState<{id:number,name:string,address:string}>({id:0,name:'',address:''});

    
    const fieldInput = (id:number,param:string) =>{
        return (
            <InputGroup>
                <Form.Control
                  aria-label={param}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{inputHandler(e,id,param)}}
                  />
              </InputGroup>
        )};
        
        const inputHandler = (e:React.ChangeEvent<HTMLInputElement>,id:number,param:string) => {
            const index = tableItems.findIndex((item:any)=>item.id === id)
            const newData = [...tableItems][index];
            newData.id = id;
            newData[param] = e.target.value;
            setTimeout(()=>{
                setNewField(newData);
            },500)
            
    
        };
const saveField = () => {
    setEdditingField(undefined);
    handleShopChange(newField)
}

    return(
        <div className={styles.shops}>
             <Button 
                className="d-inline-flex align-items-center border-0 align-self-center"
                onClick={(e: React.SyntheticEvent)=>modalHandler(!showModal)}
             >
                <span>+</span><span>Создать магазин</span>
            </Button>
            <h4>Управление магазинами</h4>
            <div className={`${styles.shops__table}`}>
            <Table className="px-0 px-sm-5">
            <thead>
                <tr>
                <th>№</th>
                <th>Название</th>
                <th>Адрес</th>
                <th>Действие</th>
                </tr>
            </thead>
            <tbody>
               {
                tableItems.map((item:any,i:number)=>{
                    const {id,name,address} = item;
                    return(
                        <tr key={id}
                            className="align-middle d-inline-flex flex-column flex-sm-row d-sm-table-row mb-5 mb-sm-0"
                        >
                            
                         <td>{id}</td>
                         <td>{edditingField !== id ? name : fieldInput(id,"name")}</td>
                         <td>{edditingField !== id ? address : fieldInput(id,"address")}</td>
                         <td>
                                <Button className="d-inline-flex align-items-center border-0" 
                                    onClick={(e)=>{
                                       edditingField ? saveField() : setEdditingField(id)
                                    }}>
                                    <Pencil/>
                                    <span>{!edditingField ? "Редактировать" : "Сохранить"}</span>
                                </Button>
                                <Button className="d-inline-flex align-items-center border-0" onClick={e=>{removeShop(id)}}>
                                    <Cancel/>
                                    <span>Удалить</span>
                                </Button>
                            </td>
                        </tr>
                    )
                })
               }
            </tbody>
            </Table>
            </div>
        </div>
    )
}