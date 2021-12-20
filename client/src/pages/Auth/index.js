import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { CommonForm } from "components";

export default function Auth({ id }) {
  const navigate = useNavigate();
  const title = id === 1 ? "Login" : "Register";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const auth = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(auth, email, password).then((response) => {
        console.log("response", response);
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/app/dashboard", { replace: true });
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password).then((response) => {
        console.log("response", response);
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/app/dashboard", { replace: true });
      });
    }
  };

  return (
    <CommonForm
      title={title}
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
}
