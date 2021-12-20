import "./styles.css";
import { Typography, TextField, Box } from "@mui/material";
import { CommonButton } from "components";

export default function CommonForm({ title }) {
  return (
    <div className="page-container">
      <div>
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "15rem" },
        }}
        autoComplete="off"
      >
        <TextField
          id="email"
          fullWidth
          required
          label="Enter the Email"
          variant="outlined"
          type="email"
          name="email"
        />
        <TextField
          fullWidth
          required
          id="password"
          label="Enter the Password"
          variant="outlined"
          type="password"
          name="password"
        />
      </Box>
      <CommonButton title={title} />
    </div>
  );
}
