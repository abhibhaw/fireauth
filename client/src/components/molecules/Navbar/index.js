import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { InheritButton } from "components";

export default function Navbar({ id, handleClick }) {
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fire Auth
          </Typography>
          {id === 1 ? (
            <>
              <InheritButton
                title="Dashboard"
                component={Link}
                to={"/app/dashboard"}
              />
              <InheritButton
                title="Profile"
                component={Link}
                to={"/app/profile"}
              />
              <InheritButton title="Logout" handleClick={handleClick} />
            </>
          ) : (
            <InheritButton
              title={location.pathname === "/register" ? "Login" : "Register"}
              component={Link}
              to={location.pathname === "/register" ? "/login" : "/register"}
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
