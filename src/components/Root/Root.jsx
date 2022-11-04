import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

// import ItemListContainer from "../../containers/ItemListContainer/ItemListContainer";

const Root = () => {
  return (
    <>
      <NavBar/>
      {/* <ItemListContainer/> */}
      <Outlet/>
    </>
  );
};

export default Root;
