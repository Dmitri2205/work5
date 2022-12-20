import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./modules/HomePage";
import styles from "styles/layout.module.scss";
import Shops from "./modules/Shops";
import Stats from "./modules/Stats";
import Promo from "./modules/Promo";
import { CreateShopModal } from "./modules/CreateShopModal";

interface ILayoutProps {
  children: JSX.Element[];
}

export interface ITableItem {
  id:number,
  name:string,
  address:string
}

export default function Layout(props: ILayoutProps) {
  const { children } = props;
  const [showCreateModal,setShowCreateModal] = useState<boolean>(false);
  const [newShopData,setNewShopData] = useState<ITableItem | null>(null)
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

const addShop = (domain:string) => {
  const newTableItems = [...tableItems];
  const newCell = {
      id:tableItems[tableItems.length-1].id + 1,
      name:"Дипломная работа",
      address:"http://" + domain + ".work5.ru"
    }
  newTableItems.push(newCell);
  setTableItems(newTableItems);
}

  return (
    <div className={`d-flex flex-column flex-sm-row col-12 ${styles.layout}`}>
      {children[1]}
      <div className={`d-flex flex-column col-lg-9 col-12 ${styles.layout__content}`}>
        {children[0]}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shops" element={
            <Shops 
              modalHandler={setShowCreateModal} 
              showModal={showCreateModal}
              handleShopChange={handleShopChange}
              tableItems={tableItems}
              />}
           />
          <Route path="/promo" element={<Promo />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
      <CreateShopModal showModal={showCreateModal} showHandler={setShowCreateModal} addShop={addShop}/>
    </div>
  );
}
