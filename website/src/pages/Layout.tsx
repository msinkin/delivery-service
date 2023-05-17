import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { store } from "store";

import Footer from "@components/sections/Footer";
import Header from "@components/sections/Header";

function Layout() {
  return (
    <Provider store={store}>
      <div className="font-noto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default Layout;
