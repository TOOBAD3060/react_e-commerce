import React from 'react'
import {featuredProducts} from '../../../data'
import { latestProducts } from '../../../data'
import { latestProducts2 } from '../../../data'

import { useGlobalContext } from '../../CartPage/context'
import './Display.css'
const DisplayProducts = () => {
  const {currentCartItems} = useGlobalContext()
  const addToCart = (id) => {
      
  }
  return (
    <>
          {/* Featured Products */}
  <div className='featured-products'>
          <h2>Featured Products</h2>
              <div className='products featured-products'>
                {featuredProducts.map((eachProduct,index)=>{
                  const {img,price,rating,name} = eachProduct
                  return <div key={index} className='each'>
                              <img  src={img} alt='market' />
                              <p>{name} </p>
                              <p>{rating}</p>
                              <span>${price}</span>
                          </div>
                })}

              </div>
  </div>
           
             {/* Latest Products */}
    <div className='latest-products'>
          <h2>Latest Products</h2>
          <div className='products '>
              {latestProducts.map((eachProduct,index) =>{
                const {img,price,rating,name} = eachProduct
                return <div key={index} className='each'>
                            <img  src={img} alt='market' />
                            <p>{name} </p>
                            <p>{rating}</p>
                            
                            <span>{price}</span>
                        </div>
              })}
          </div>

          <div className='products mobile-hidden'>
              {latestProducts2.map((eachProduct,index) =>{
                const {img,price,rating,name} = eachProduct
                return <div key={index} className='each'>
                            <img  src={img} alt='market' />
                            <p>{name} </p>
                            <p>{rating}</p>
                            <span>{price}</span>
                        </div>
              })}
          </div>
    </div>
              
    </>
    
  )
}

export default DisplayProducts