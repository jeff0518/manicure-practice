import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AdminLogin from "../pages/AdminLogin";
import RootLayout from "./RootLayout";
import Reserve from "../pages/Reserve";
import Schedule from "../pages/admin/Schedule";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "auth", element: <Auth /> },
        { path: "register", element: <Register /> },
        { path: "reserve", element: <Reserve /> },
        { path: "admin", element: <AdminLogin /> },
      ],
    },
    {
      path: "/admin",
      element: <RootLayout />,
      children: [{ path: "schedule", element: <Schedule /> }],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
