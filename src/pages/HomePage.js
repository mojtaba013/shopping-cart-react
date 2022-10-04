import * as data from "../data";
import { useCartAction } from "../Providers/CartProvider";

const HomePage = () => {
  const dispatch = useCartAction();

  const addProductHandler = (product) => {
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
                  Add to cart
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
