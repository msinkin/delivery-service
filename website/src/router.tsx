import { createBrowserRouter } from "react-router-dom";

import Layout from "@pages/Layout";
import App from "@pages/App";
import ErrorPage from "@pages/ErrorPage";

import individuals from "@pages/individuals";
import business from "@pages/business";
import about from "@pages/about";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      ...individuals,
      ...business,
      ...about
    ],
  },
]);
