import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <header>
          <Header></Header>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
