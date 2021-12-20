import Button from "@mui/material/Button";

export default function InheritButton({ title, handleClick, component, to }) {
  return handleClick ? (
    <Button color="inherit" onClick={handleClick} sx={{ m: 1 }}>
      {title}
    </Button>
  ) : (
    <Button component={component} color="inherit" to={to} sx={{ m: 1 }}>
      {title}
    </Button>
  );
}
