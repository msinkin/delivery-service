import ReactDOM from "react-dom/client";

import App from "@pages/App";
import "./i18n";

import "@styles/index.css";
import "@styles/mona-sans.css";
import "@styles/noto-sans.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
