import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Course from "./pages/course";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course",
    element: <Course />,
  },
]);
