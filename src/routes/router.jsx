import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import Profile from "../pages/Profile";
import PlantDetails from "../components/PlantDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    Component: RootLayout,
    loader: () => fetch("/plants.json"),
    children: [
      {
        index: true,
        // loader: () => fetch("/plants.json"),
        Component: Home,
      },

      {
        path: "/plant-details/:id",
        element: (
          <PrivateRouter>
            {" "}
            <PlantDetails></PlantDetails>{" "}
          </PrivateRouter>
        ),
        errorElement: <NotFound />,
      },
      {
        path: "/plants",
        element: <Plants />,
        loader: () => fetch("/plants.json"),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Signup,
      },
    ],
  },
]);
