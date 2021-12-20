import Button from "@mui/material/Button";

export default function CommonButton({ title, handleClick }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleClick}
      sx={{ m: 1 }}
    >
      {title}
    </Button>
  );
}
