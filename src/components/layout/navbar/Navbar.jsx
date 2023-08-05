import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="containerNavbar">
          <Link  to="/"><img className="icon" src="https://res.cloudinary.com/dbulvkpxz/image/upload/v1691254515/Coder/musica-en-vivo_j3a43e.png" alt="" /></Link>
          <ul className="categories">
            <li><Link className="menu-link" to="/">Todas</Link></li>
            <li><Link className="menu-link" to="/category/Guitarras">Guitarras</Link></li>
            <li><Link className="menu-link" to="/category/Bajos">Bajos</Link></li>
          </ul>
          <Link className="menu-link" to="dashboard">ADMIN</Link>

          <CartWidget />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
