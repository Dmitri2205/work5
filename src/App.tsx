import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { CreateShopModal } from './components/modules/CreateShopModal';


export default function App(){
  

  return(
    <Layout>
      <Header/>
      <Sidebar/>
    </Layout>
  )
}