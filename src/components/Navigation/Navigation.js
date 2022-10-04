import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css"
const Navigation = () => {
  const {cart}=useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li className="cartLink">
            <NavLink to="/cart">Cart</NavLink>
            <span>{cart.length}</span>
          </li>
        </ul>
    
      </nav>
    </header>
  );
};

export default Navigation;
