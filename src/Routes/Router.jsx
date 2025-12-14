import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Home from "../components/Home";
import CoffeeDetails from "../components/CoffeeDetails";
import Signup from "../components/Signup";
import SignIn from "../components/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/coffees"),
      },
      {
        path: "home",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/coffees"),
        HydrateFallback: "",
      },
      {
        path: "coffees/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);
