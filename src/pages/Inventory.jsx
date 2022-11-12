import React from "react";

import useGetData from "../hooks/useGetData";

import List from "../containers/List";
import Navbar from "../containers/Navbar";
import Logout from "../components/Logout";

const Inventory = () => {
  //const list = useGetData("");
  const list = {
    items: [
      {
        serial: "string",
        connection_type: "directa",
        storage_system: "interno",
        condition: "nuevo",
        owner: "RF",
        location: "string",
        manufacturer: "string",
        purchase: "string",
        i_max: 0,
        i_b: 0,
        i_n: 0,
        seals: 0,
        id: 3,
        created_at: "2022-11-03T17:28:58.601571",
        updated_at: "2022-11-05T16:21:49.236744",
      },
      {
        serial: "string",
        connection_type: "directa",
        storage_system: "interno",
        condition: "nuevo",
        owner: "RF",
        location: "string",
        manufacturer: "string",
        purchase: "string",
        i_max: 0,
        i_b: 0,
        i_n: 0,
        seals: 0,
        id: 4,
        created_at: "2022-11-03T17:29:01.277029",
        updated_at: "2022-11-05T01:01:25.044008",
      },
    ],
  };
  return (
    <>
      <Navbar>
        <Logout></Logout>
      </Navbar>
      <List itemList={list.items}></List>
    </>
  );
};

export default Inventory;
