import { Navigate, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth, useAuthAction } from "../Providers/AuthProvider";
import { useCart, useCartAction } from "../Providers/CartProvider";
import "./cartPage.css";
const CartPage = () => {
  const { cart, total } = useCart();

  const dispatch = useCartAction();
  if (!cart.length) return <p>Cart is Empty</p>;
  const incHandler = (cartitem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartitem });
  };
  const decHandler = (cartitem) => {
    dispatch({ type: "REMOVE", payload: cartitem });
  };

  return (
    <main className="container">
      <section className="cartCenter">
        <section className="cartItemList">
          {cart.map((item) => {
            return (
              <div className="cartItem">
                <div className="itemImg">
                  <img src={item.image} alt="" />
                </div>
                <div>{item.name}</div>
                <div>{item.offPrice * item.quantity}</div>
                <div className="btnGroup">
                  <button onClick={() => decHandler(item)}>-</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => incHandler(item)}>+</button>
                </div>
              </div>
            );
          })}
        </section>
        <Cartsummery />
      </section>
    </main>
  );
};

export default CartPage;

const Cartsummery = () => {
  const { cart, total } = useCart();
  

  const originTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
  return (
    <section className="cartSummery">
      <h2 style={{ marginBottom: "30px" }}>cart summery</h2>
      <div className="summeryItem">
        <p>Original Total Price</p>
        <p>{originTotalPrice}$</p>
      </div>
      <div className="summeryItem">
        <p>cart discount</p>
        <p>{originTotalPrice - total}$</p>
      </div>
      <div className="summeryItem net">
        <p>net price</p>
        <p>{total}$</p>
      </div>
      <NavLink to="/signup?redirect=checkout">
        <button>CheckOut</button>
      </NavLink>
      
    </section>
  );
};
