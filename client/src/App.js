import { useRoutes } from "react-router-dom";
import "./app.css";
import "./configs/Firebase";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import routes from "./routes";
import axios from "axios";
import { api } from "env";

export default function App() {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        axios
          .get(`${api.user}?uid=${user.uid}`)
          .then((res) => {
            setDbUser(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, [auth]);
  function signOutUser() {
    signOut(auth);
    setUser(null);
  }
  const routing = useRoutes(routes(user, loading, signOutUser, dbUser));
  return routing;
}
