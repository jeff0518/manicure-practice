import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AdminLogin from "../pages/AdminLogin";
import RootLayout from "./RootLayout";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/auth", element: <Auth /> },
        { path: "/register", element: <Register /> },
        { path: "/admin", element: <AdminLogin />, children: [] },
        { path: "/home", element: <Home />, children: [] },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
