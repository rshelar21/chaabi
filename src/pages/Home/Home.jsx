import React from "react";
import "./Home.css";
import SideBar from "../../components/Sidebar/SideBar";
import DashBoard from "../../components/Dashboard/DashBoard";

const Home = () => {
  return (
    <>
      <div className="home__body">
        <SideBar />
        <DashBoard />
      </div>
    </>
  );
};

export default Home;
