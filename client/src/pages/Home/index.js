import { CommonButton } from "components";
export default function Home({ handleClick }) {
  return (
    <div className="page-container">
      <h1>Logged In</h1>
      <CommonButton title="Log Out" handleClick={handleClick} />
    </div>
  );
}
