import React, { MouseEventHandler, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Pencil } from "../../img/icons/pencil.jsx";
import { Cancel } from "../../img/icons/cancel.jsx";
import styles from "styles/pages_styles/shops.module.scss";

interface ITableItem {
    id:number,
    name:string,
    address:string
}

export default function Shops(props: any){
    const {modalHandler,showModal} = props;

    const [tableItems,setTableItems] = useState<Array<ITableItem>>([
        {
           id:25768,
           name:"Дипломная работа",
           address:"http://www.work5.ru/services"
        },
        {
            id:25769,
            name:"Дипломная работа",
            address:"http://www.work5.ru/services"
         },
         {
            id:25770,
            name:"Дипломная работа",
            address:"http://www.work5.ru/services"
         }
    ]);


    const handleShopChange = (idx: number) => {
        const newList = [...tableItems];
        const shopIndex = newList.findIndex((item: ITableItem)=>item.id === idx);
        if(shopIndex !== -1) newList[shopIndex].address = "changed";
        setTableItems(newList)
    }

    return(
        <div className={styles.shops}>
             <Button 
                className="d-inline-flex align-items-center border-0"
                onClick={(e: React.SyntheticEvent)=>modalHandler(!showModal)}
             >
                <span>+</span><span>Создать магазин</span>
            </Button>
            <h4>Управление магазинами</h4>
            <div className={styles.shops__table}>
            <Table hover className="px-5">
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
                tableItems.map((item:ITableItem,i:number)=>{
                    const {id,name,address} = item;
                    return(
                        <tr key={id}
                            className="align-middle"
                        >
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{address}</td>
                            <td>
                                <Button className="d-inline-flex align-items-center border-0" onClick={e=>handleShopChange(id)}>
                                    <Pencil/>
                                    <span>Редактировать</span>
                                </Button>
                                <Button className="d-inline-flex align-items-center border-0">
                                    <Cancel/>
                                    <span>Редактировать</span>
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