import Footer from "@components/Footer";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="font-noto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
