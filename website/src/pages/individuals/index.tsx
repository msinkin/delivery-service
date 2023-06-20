import Calculation from "./Calculation";
import Packages from "./Packages";
import Points from "./Points";
import Track from "./Track";

export default [
    {
        path: "/calc",
        element: <Calculation />
    },
    {
        path: "/track",
        element: <Track />
    },
    {
        path: "/track/:trackNumber",
        element: <Track />
    },
    {
        path: "/points",
        element: <Points />
    },
    {
        path: "/packages",
        element: <Packages />
    }
];