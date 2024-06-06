import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
