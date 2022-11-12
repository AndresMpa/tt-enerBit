import React from "react";

import useGetData from "../hooks/useGetData";

import List from "../containers/List";
import Layout from "../containers/Layout";
import Navbar from "../containers/Navbar";
import Logout from "../components/Logout";

const Inventory = () => {
  //const list = useGetData("");<List itemList={list}></List>
  return (
    <Layout>
      <Navbar>
        <Logout></Logout>
      </Navbar>
      
    </Layout>
  );
};

export default Inventory;
