import * as data from "../data";
import { useCart, useCartAction } from "../Providers/CartProvider";
import { checkInCart } from "../utils/CheckInCart";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = () => {
  const dispatch = useCartAction();
  const {cart}=useCart();

  const addProductHandler = (product) => {
    toast.success(`${product.name} added to cart successfully`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <main className="container">
      <section className="productList">
        {data.products.map((product) => {
          return (
            <section className="product" key={product.id}>
              <div className="productImage">
                <img src={product.image} alt="" />
              </div>
              <div className="productDesc">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button
                  onClick={() => addProductHandler(product)}
                  className="btn primary"
                >
                  {checkInCart(cart,product)?"In Cart ":"Add To Cart"}
                </button>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
