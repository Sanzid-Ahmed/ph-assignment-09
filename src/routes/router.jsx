import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path:"/",
        Component: HomeLayout,
        children: [
            {
                index:true,
            },
        ]
    },
    {
        path:"/*",
        element: <p>Error404</p>
    }
]);

export default router;