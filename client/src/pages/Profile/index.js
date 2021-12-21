import { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { CommonButton } from "components";
import axios from "axios";
import { api } from "env";
import { toast, ToastContainer } from "react-toastify";

export default function Profile({ dbUser, user }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  useEffect(() => {
    if (dbUser) {
      setName(dbUser.name);
      setBio(dbUser.bio);
    }
  }, [dbUser]);
  return (
    <>
      <div className="page-container">
        <Typography variant="h3" sx={{ m: 4 }}>
          Profile
        </Typography>
        <Box component="form" sx={{ m: 2 }} autoComplete="off">
          <img
            height="150"
            width="150"
            src="https://avatars.githubusercontent.com/u/39991296?v=4"
            alt="User Avatar"
          />
          <TextField
            id="name"
            fullWidth
            required
            label="Your Name"
            variant="outlined"
            name="name"
            value={name}
            sx={{ m: 2 }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            fullWidth
            required
            id="bio"
            label="Your Bio"
            variant="outlined"
            name="bio"
            value={bio}
            sx={{ m: 2 }}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
          <CommonButton
            title="Save"
            handleClick={() =>
              axios
                .post(api.edit, { uid: user.uid, name, bio })
                .then((_) => {
                  toast.success("Success");
                })
                .catch((_) => {
                  toast.error("Something went wrong");
                })
            }
          />
        </Box>
      </div>
      <ToastContainer />
    </>
  );
}
