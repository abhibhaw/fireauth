import { Outlet } from "react-router-dom";
import { Navbar } from "components";

export default function MainLayout({ id, handleClick }) {
  return (
    <>
      <Navbar id={id} handleClick={handleClick} />
      <Outlet />;
    </>
  );
}
