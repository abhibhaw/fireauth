import Button from "@mui/material/Button";

export default function CommonButton({ title }) {
  return (
    <Button variant="contained" color="secondary">
      {title}
    </Button>
  );
}
