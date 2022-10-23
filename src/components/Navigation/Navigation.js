import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";
const Navigation = () => {
  const { cart } = useCart();
  const userInfo = useAuth();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <div>Logo</div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
        <ul>
          <li className="cartLink">
            <NavLink to="/cart">Cart</NavLink>
            <span>{cart.length}</span>
          </li>
          <li>
            <NavLink to={userInfo ? "profile" : "/login"}>
              {userInfo ? "profile" : "Login/SignUp"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
