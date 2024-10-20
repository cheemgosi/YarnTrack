import React from "react";
import Pie from "../components/pie";
import Bar from "../components/bar";

const Home = () => {
  return (
    <div>
      <div className="title">Pagrindinis</div>
      <div className="containers-container">
        <Pie />
        <Bar />
      </div>
    </div>
  );
};

export default Home;
