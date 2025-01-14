import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Sercvices from "../pages/Sercvices";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Homepage />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "services",
                element: <Sercvices />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
]);



export default router;
