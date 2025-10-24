import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";
import ServicesSection from "../components/servicesSection/ServicesSection";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../layouts/AuthLayout";
import Details from "../components/details/Details";
import PrivateRoute from "../provider/PrivateRoute";
import profile from "../components/Profile/profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/petCareServices.json"),
      },
      {
        path: "/services",
        Component: ServicesSection,
        loader: () => fetch("/petCareServices.json"),
      },
      {
        path:"/profile",
        Component:profile,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path:"/details/:id",
    element: <PrivateRoute>
      <Details></Details>
    </PrivateRoute>,
    loader: ()=> fetch("/petCareServices.json"),
  },
  {
    path: "/*",
    element: <p>Error404</p>,
  },
]);

export default router;
