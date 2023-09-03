import React,{useState} from 'react'
import './Product.css'

import Menu from './Menu'
import Categories from './Categories'
import { products } from './product-data'


import { useGlobalContext } from '../CartPage/context'

const allCategories = ['all',...new Set(products.map((item)=> item.category) )]

const ProductPage = () => {
      const {addToCart} = useGlobalContext() ;
     

    const [menuItems, setMenuItems] = useState(products);
    const [showSort,setShowSort] = useState(false);
    // const [categories, setCategories] = useState(allCategories);

    const filterItems = (category)  => {
        if(category === 'all'){
            setMenuItems(products)
            return;
        }
        const newItems = products.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    const showHideSort = () => setShowSort(!showSort)

  return ( 
    <>
    {/* <Nav /> */}
    
    <Categories showSort={showSort} showHideSort={showHideSort} categories={allCategories} filterItems={filterItems} />
    <button className='sort' onClick={showHideSort}>Sort</button>
    <Menu addItems= {addToCart} items={menuItems} />
    </>
    
  )
}

export default ProductPage