import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container mx-auto pt-20 mb-14">
      <section className="section">
        <h2 className="text-7xl mb-7">404</h2>
        <p className="text-2xl mb-7">Page not found</p>
        <Link to="/" className="text-2xl text-globalcolor2">
          Back Home
        </Link>
      </section>
    </div>
  );
};
export default Error;
