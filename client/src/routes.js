import { Navigate } from "react-router-dom";
import { MainLayout } from "components";
import { Auth, Home, NotFound } from "pages";
import { CircularIndeterminate } from "components";
const routes = (user, loading) => [
  {
    path: "app",
    element: !loading ? (
      user ? (
        <MainLayout />
      ) : (
        <Navigate to="/login" />
      )
    ) : (
      <CircularIndeterminate />
    ),
    children: [
      { path: "", element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/",
    element: user ? <Navigate to="/app/dashboard" /> : <MainLayout />,
    children: [
      { path: "", element: <Navigate to="/login" /> },
      { path: "login", element: <Auth id={1} /> },
      { path: "register", element: <Auth /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
