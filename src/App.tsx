import React, { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { CreateShopModal } from './components/modules/CreateShopModal';


export default function App(){
  
  const [menuOpened,setMenuOpened] = useState<boolean>(false)

  return(
    <Layout>
      <Header menuOpened={menuOpened} handleOpen={setMenuOpened}/>
      <Sidebar menuOpened={menuOpened} handleOpen={setMenuOpened}/>
    </Layout>
  )
}