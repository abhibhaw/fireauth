import { MainLayout } from "components";
import { Login, Register } from "pages";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
