import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Course from "./pages/course";
import PreSubscribe from "./pages/preSubscribe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course",
    element: <Course />,
  },
  {
    path: "/pre-subscribe",
    element: <PreSubscribe />,
  },
]);
