import { Navigate } from "react-router-dom";
import { MainLayout } from "components";
import { Auth, Home, NotFound, Profile } from "pages";
import { CircularIndeterminate } from "components";

const routes = (user, loading, signOutUser, dbUser) => [
  {
    path: "app",
    element: !loading ? (
      user ? (
        <MainLayout id={1} handleClick={signOutUser} />
      ) : (
        <Navigate to="/login" />
      )
    ) : (
      <CircularIndeterminate />
    ),
    children: [
      { path: "", element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <Home uid={user} dbUser={dbUser} /> },
      { path: "profile", element: <Profile dbUser={dbUser} /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/",
    element: !loading ? (
      user ? (
        <Navigate to="/app/dashboard" />
      ) : (
        <MainLayout />
      )
    ) : (
      <CircularIndeterminate />
    ),
    children: [
      { path: "", element: <Navigate to="/login" /> },
      { path: "login", element: <Auth id={1} /> },
      { path: "register", element: <Auth /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;
