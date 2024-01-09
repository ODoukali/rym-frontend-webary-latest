import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import UserLayout from "./components/user/UserLayout";

import Home from "./pages/home";
import Course from "./pages/course";
import PreSubscribe from "./pages/preSubscribe";
import Dashboard from "./pages/dashboard";
import Notifications from "./pages/notifications";
import AccountSettings from "./pages/accountSettings";
import Courses from "./pages/courses";
import Favorites from "./pages/favorites";
import PurchaseHistory from "./pages/purchaseHistory";

const useRouter = () => {
  const router = createBrowserRouter([
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
    {
      path: "/user/",
      element: <UserLayout />,
      children: [
        {
          path: "/user/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/user/notifications",
          element: <Notifications />,
        },
        {
          path: "/user/account-settings",
          element: <AccountSettings />,
        },
        {
          path: "/user/purchase-history",
          element: <PurchaseHistory />,
        },
        {
          path: "/user/courses",
          element: <Courses />,
        },
        {
          path: "/user/favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);

  return router;
};

export default useRouter;
