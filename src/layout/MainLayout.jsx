import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="flex-grow">
        <Navbar></Navbar>
        <div className="mt-20">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="flex-shrink-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
