import React, { useState } from 'react'

const Menu = ({items,addItems}) => {
  const [isAddToCartBtn,setIsAddToCartBtn] = useState(false)
  return (
    <div className='products-container'>
        {items.map((eachItem)=>{
            const {id,name,img,rating,price} = eachItem;
            return <div  key={id} className='each' onClick={()=> {
              addItems(id)
              console.log(1111111)
            } }>
            <img  src={img} alt='market' />
            <p>{name} </p>
            <p>{rating}</p>
            
            <span>${price}</span>

            {isAddToCartBtn && <button className='add-to-cart'>Add To Cart</button>}
        </div>
        })}

    </div>
  )
}

export default Menu