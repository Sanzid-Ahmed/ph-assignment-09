import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";

const router = createBrowserRouter([
    {
        path:"/",
        Component: HomeLayout,
        children: [
            {
                index:true,
                Component: Home,
                loader: ()=>fetch("/petCareServices.json"),
            },
            {
                path:"/services"
            }
        ]
    },
    {
        path:"/*",
        element: <p>Error404</p>
    }
]);

export default router;