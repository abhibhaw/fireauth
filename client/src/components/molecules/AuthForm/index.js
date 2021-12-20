import "./styles.css";
import { Typography, TextField, Box } from "@mui/material";
import { CommonButton } from "components";

export default function CommonForm({
  title,
  setEmail,
  setPassword,
  handleSubmit,
}) {
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          fullWidth
          required
          id="password"
          label="Enter the Password"
          variant="outlined"
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Box>
      <CommonButton title={title} handleClick={handleSubmit} />
    </div>
  );
}
