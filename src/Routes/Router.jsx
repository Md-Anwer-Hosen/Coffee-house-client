import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Home from "../components/Home";
import CoffeeDetails from "../components/CoffeeDetails";
import Signup from "../components/Signup";
import SignIn from "../components/SignIn";
import UserTable from "../components/UserTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("https://coffee-store-server-ten-fawn.vercel.app/coffees"),
      },
      {
        path: "home",
        element: <Home />,
        loader: () =>
          fetch("https://coffee-store-server-ten-fawn.vercel.app/coffees"),
        HydrateFallback: "",
      },
      {
        path: "coffees/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ten-fawn.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ten-fawn.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "users",
        element: <UserTable />,
        loader: () =>
          fetch("https://coffee-store-server-ten-fawn.vercel.app/users"),
      },
    ],
  },
]);
