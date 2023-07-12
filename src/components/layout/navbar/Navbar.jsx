import { Link } from "react-router-dom";

import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div>
        <div className={"containerNavbar"}>
          <Link to="/">
            <h4>Music Store</h4>
          </Link>

          <ul className="categories">
            <Link to="/">Todas</Link>
            <Link to="/category/Guitarras">Guitarras</Link>
            <Link to="/category/Bajos">Bajos</Link>
          </ul>

          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
