import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main"
import Home from "../pages/Home"
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "contact-us",
                element: <ContactUs></ContactUs>
            }
        ]
    }
])

export default router;