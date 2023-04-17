import { createBrowserRouter } from "react-router-dom";

import Layout from "@pages/Layout";
import App from "@pages/App";
import Career from "@pages/Career";
import ErrorPage from "@pages/ErrorPage";
import About from "@pages/About.mdx";
import Calculation from "@pages/Calculation";
import Track from "@pages/Track";

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
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "career/",
        element: <Career />,
      },
      {
        path: "calc/:fromAddress/:toAddress",
        element: <Calculation/>
      },
      {
        path: "track/:trackNumber",
        element: <Track/>
      }
    ],
  },
]);
