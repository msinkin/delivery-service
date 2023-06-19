import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import Footer from "@components/sections/Footer";
import Header from "@components/sections/Header";
import { WagmiConfig } from "wagmi";
import { config } from "../wagmi";

function Layout() {
  return (
    <WagmiConfig config={config}>
      <div className="font-noto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </WagmiConfig>
  );
}

export default Layout;
