import React from "react";
import { useGlobalContext } from "./context";



const CartItem = ({id,name,img,price,amount}) => {
    const {remove,increase,decrease,toggleAmount} = useGlobalContext()
  return (
 <article  className="cart-item">
     <div className="pt-1">
        <img width='70px' src={img} alt={name}  />
        <div className="item-details">
        <p>{name} </p>
        <p>${price} </p>
        <button onClick={()=> remove(id)}>Remove</button>
        </div>
     </div>
     <div className="pt-2">
        <p>{amount} </p>
        <button onClick={()=> decrease(id)}>-</button>
        <button onClick={()=> increase(id)}>+</button>
     </div>
     <div className="pt-3">
        <p>${amount * price } </p>
     </div>
  </article>
  )
}

export default CartItem