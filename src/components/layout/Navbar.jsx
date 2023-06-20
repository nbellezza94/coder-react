import { CartWidget } from "../common/Cart/CartWidget"
import "./navbar.css"
export const Navbar = () => {
    return <div>
        <ul>
            <li>Home</li>
            <li>Guitarras</li>
            <li>Bajos</li>
        </ul>
        <CartWidget/>
    </div>
}