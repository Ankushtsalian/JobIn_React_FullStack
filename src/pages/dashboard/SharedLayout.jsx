import React from "react";
import { Outlet } from "react-router-dom";
import { SmallSidebar, BigSidebar, NavBar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
