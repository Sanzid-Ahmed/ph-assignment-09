import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

const HomeLayout = () => {


  const {state} = useNavigate();

  return (
    <div>
      <div>
        <header>
          <Header></Header>
        </header>
        <main>
          {state == "loading"? <Loading/> : <Outlet></Outlet>}
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
