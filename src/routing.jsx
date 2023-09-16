import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Course from "./pages/course";
import PreSubscribe from "./pages/preSubscribe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/course",
    element: <Layout />,
    children: [
      {
        path: "/course",
        element: <Course />,
      },
    ],
  },
  {
    path: "/pre-subscribe",
    element: <Layout />,
    children: [
      {
        path: "/pre-subscribe",
        element: <PreSubscribe />,
      },
    ],
  },
]);
