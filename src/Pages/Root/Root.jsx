
import Navbar from "../../Componants/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Componants/Footer/Footer";
import ErrorPage from "../ErrorPage/ErrorPage";

const Root = () => {
  return (
    <div className="max-w-5xl mx-auto mt-1">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Root;
