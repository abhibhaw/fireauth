import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CommonForm } from "components";
import { api } from "env";

export default function Auth({ id }) {
  const navigate = useNavigate();
  const title = id === 1 ? "Login" : "Register";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const auth = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(auth, email, password)
        .then((_) => {
          navigate("/app/dashboard", { replace: true });
        })
        .catch((error) => {
          toast.error(error.code);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          axios
            .post(api.user, { uid: res.user.uid })
            .then((_) => {
              navigate("/app/dashboard", { replace: true });
            })
            .catch((err) => {
              toast.error(err);
            });
        })
        .catch((error) => {
          toast.error(error.code);
        });
    }
  };

  return (
    <>
      <CommonForm
        title={title}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
      <ToastContainer />
    </>
  );
}
