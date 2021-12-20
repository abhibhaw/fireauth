import { Box, CircularProgress } from "@mui/material";

export default function CircularIndeterminate() {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    </div>
  );
}
