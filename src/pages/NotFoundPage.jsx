import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div>
        <Link to={"/"}>Go back home</Link>
      </div>
    </>
  );
}
export default NotFoundPage;
