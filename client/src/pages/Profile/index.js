import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { CommonButton } from "components";

export default function Profile() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  return (
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
          sx={{ m: 2 }}
          onChange={(e) => {
            setBio(e.target.value);
          }}
        />
        <CommonButton title="Save" handleClick={() => console.log(name, bio)} />
      </Box>
    </div>
  );
}
