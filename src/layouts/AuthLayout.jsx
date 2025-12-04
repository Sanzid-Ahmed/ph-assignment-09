import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <header>
          <Header></Header>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
