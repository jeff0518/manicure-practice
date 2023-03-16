import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AdminLogin from "../pages/AdminLogin";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/admin", element: <AdminLogin />, children: [] },
    { path: "/", element: <Home />, children: [] },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router