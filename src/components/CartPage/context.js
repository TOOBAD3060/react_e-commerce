import React,{useState,useContext,useReducer,useEffect} from "react";
import { products } from "../ProductPage/product-data";
import reducer from "./reducer";

const AppContext = React.createContext();
// let currentCartItems = []

const initialState = {
    cart: [],
    total:0,
    amount:0,
    currentCart:0,
}


const AppProvider = ({children}) => {
 
    const [state,dispatch] = useReducer(reducer,initialState)
    
    useEffect(() => {
      dispatch({ type: 'GET_TOTALS' })
    },[state.cart])
    
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
      }
      const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
      }
      const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
      }
      const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
      }
      const toggleAmount = (id, type) => {
              }
      const addToCart = (id) => {
        dispatch({ type: 'ADD_ITEM', payload: id })

      } 
      

      return (
        <AppContext.Provider 
        value={{
            ...state,
            addToCart,
            clearCart,
            remove,
            increase,
            decrease,
            toggleAmount
        }}
        >
            {children}
        </AppContext.Provider>
      )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}