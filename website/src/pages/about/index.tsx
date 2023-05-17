import Career from "./Career";
import Contacts from "./Contacts";
import History from "./History";
import Management from "./Management";

export default [
    {
        path: "career/",
        element: <Career />
    },
    {
        path: "contacts/",
        element: <Contacts />
    },
    {
        path: "history/",
        element: <History />
    },
    {
        path: "management/",
        element: <Management />
    }
];