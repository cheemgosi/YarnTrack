import React from "react";
import Pie from "../components/pie";
import Bar from "../components/bar";
import InventoryList from "../components/inventoryList";

const Home = () => {
  return (
    <div>
      <div className="title">Pagrindinis</div>
      <div className="containers-container">
        <Pie />
        <Bar />
        <InventoryList />
      </div>
    </div>
  );
};

export default Home;
