import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "router";

import "./i18n";

import "@styles/index.css";
import "@styles/mona-sans.css";
import "@styles/noto-sans.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
