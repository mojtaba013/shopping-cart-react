export const checkInCart=(cart,product)=>{
    return cart.find(i=>i.id===product.id);
  }