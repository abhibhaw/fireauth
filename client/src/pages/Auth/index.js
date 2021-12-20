import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { CommonForm } from "components";

export default function Auth({ id }) {
  const title = id === 1 ? "Login" : "Register";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const auth = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(auth, email, password).then((response) => {
        console.log("Login", response);
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password).then((response) => {
        console.log("Register", response);
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
