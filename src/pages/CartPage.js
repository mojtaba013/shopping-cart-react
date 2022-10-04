import { useCart, useCartAction } from "../Providers/CartProvider";
import './cartPage.css'
const CartPage = () => {
  const { cart,total} = useCart();
console.log("sex",useCart());
  const dispatch=useCartAction();
  if (!cart.length) return <p>Cart is Empty</p>;
  const incHandler=(cartitem)=>{
    dispatch({type:'ADD_TO_CART',payload:cartitem});
  }
  const decHandler=(cartitem)=>{
    dispatch({type:'REMOVE',payload:cartitem});
  }
  

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
                <div>{item.price * item.quantity}</div>
                <div>
                  <button onClick={()=>decHandler(item)}>remove</button>
                  <button>{item.quantity}</button>
                  <button onClick={()=>incHandler(item)}>Add</button>
                </div>
              </div>
            );
          })}
        </section>
        <section className="cartSummery">
          <h2>cart summery</h2>
          <div>{total}</div>
        </section>
      </section>
    </main>
  );
};

export default CartPage;
