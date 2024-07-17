import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./mainLayout.css";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
