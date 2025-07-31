import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/details">Recipe Details</Link>
    </nav>
  );
};

export default Navbar;
