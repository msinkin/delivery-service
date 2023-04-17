import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "router";
import "./i18n";

import "@styles/index.css";
import "@styles/mona-sans.css";
import "@styles/noto-sans.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
