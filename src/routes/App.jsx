import React from "react";
import { Routes, Route } from "react-router-dom";

//import useInitialState from "../hooks/useInitialState.jsx";

import AppContext from "../context/AppContext.jsx";
import RequireAuth from "../context/RequireAuth.jsx";

import Layout from "../containers/Layout.jsx";

import Inventory from "../pages/Inventory.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";

const App = () => {
  return (
    <AppContext.Provider value={AppContext}>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/inventory"
            element={
              <RequireAuth>
                <Inventory />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
