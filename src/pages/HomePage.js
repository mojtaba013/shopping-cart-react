
import * as data from "../data";
const HomePage = () => {
  return (
    <main className="container">
        <section className="productList">
           {data.products.map((prd) => {
        return (
          <section className="product">
            <div className="productImage">
              <img src={prd.image} alt=""/>
            </div>
            <div className="productDesc">
              <p>{prd.name}</p>
              <p>{prd.price}</p>
              <button className="btn primary">Add to cart</button>
            </div>
          </section>
        );
      })} 
        </section>
      
    </main>
  );
};

export default HomePage;
