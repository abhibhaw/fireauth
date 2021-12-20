import { MainLayout } from "components";
import { Auth } from "pages";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Navigate to="/login" /> },
      { path: "login", element: <Auth id={1} /> },
      { path: "register", element: <Auth /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
