import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main"
import Home from "../pages/Home"
import ShareBaraz from "../pages/ShareBaraz";

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
                path: "newspapers",
                element: <Home></Home>
            },
            {
                path: "share-bazar",
                element: <ShareBaraz></ShareBaraz>
            }
        ]
    }
])

export default router;