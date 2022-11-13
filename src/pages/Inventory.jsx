import React from "react";

import useGetData from "../hooks/useGetData";

import List from "../containers/List";
import Navbar from "../containers/Navbar";
import Option from "../containers/Option";
import Logout from "../components/Logout";
import Loading from "../components/Loading";

const Inventory = () => {
  const list = useGetData("");
  return (
    <>
      <Navbar>
        <Logout />
      </Navbar>
      <Option />
      {list.length <= 0 ? <Loading /> : <List itemList={list} />}
    </>
  );
};

export default Inventory;
