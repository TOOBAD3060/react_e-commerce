import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = ({showProduct}) => {
    const {cart,total,clearCart} = useGlobalContext();
 if(cart.length === 0){
    return (
        <section className='empty-cart'>
            <header>
                <h2>your bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
                <div onClick={showProduct}><a href='#'>Proceed to product page</a></div>
            </header>
        </section>
    )
 }
    return (
    <section className='cart'>
        <header>
            <h3>Product</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
        </header>

        <div>
            {
         cart.map((item)=>{
            return <CartItem key={item.id} {...item} />
         })       
            }
        </div>

         <footer className='cart'>
            <hr />
            <div className='cart-total'>
                <h4>
                    total: &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;  <span>${total} </span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={clearCart}>
                Clear Cart
            </button>
         </footer>       
    </section>
  )
}

export default CartContainer