import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path:"/",
        element: <h2>Hello</h2>
    },
    {
        path:"/*",
        element: <p>Error404</p>
    }
]);

export default router;