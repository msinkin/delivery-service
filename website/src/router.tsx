import { createBrowserRouter } from "react-router-dom";

import Root from "@pages/Root";
import App from "@pages/App";
import Career from "@pages/Career";
import ErrorPage from "@pages/ErrorPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "career/",
        element: <Career />,
      },
    ],
  },
]);
