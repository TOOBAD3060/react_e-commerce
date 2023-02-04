import { useState } from "react";
import LandingPage from "./LandingPage/LandingPage";
import ProductPage from "./ProductPage/ProductPage";
import CartPage from "./CartPage/CartPage";
import Account from "./ACCOUNT/Account";
import Nav from "./LandingPage/NAV/Nav";

// import {createBrowserRouter,Route,RouterProvider,Link} from "react-router-dom"
 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />
//   },
//   {
//     path: "/account",
//     element: <Account />
//   },
//   {
//     path: "/cart",
//     element: <CartPage />
//   },
//   {
//     path: "/product",
//     element: <ProductPage />
//   }
// ])

function App() {
  const [isShowPage,setIsShowPage] = useState({
    home:true,
    account: false,
    product: false,
    cart:false,
  })
  // const [showNav,isShowNav ] = useState(true)

  const showHome = () => {
    setIsShowPage({
          home:true,
          account: false,
          product: false,
          cart:false,
            })
  }
  const showProduct = () => {
    setIsShowPage({
      home:false,
      account: false,
      product: true,
      cart:false,
        })
  }
  const showAccount = () => {
    setIsShowPage({
      home:false,
      account: true,
      product: false,
      cart:false,
        })
  }
  const showCart = () => {
    setIsShowPage({
      home:false,
      account: false,
      product: false,
      cart:true,
        })
  }
  

  return (
    <div className="app">
       <Nav showHome={showHome} showCart={showCart} showAccount={showAccount}  showProduct={showProduct}  />
       {isShowPage.home && <LandingPage />}
       {isShowPage.account && <Account />}
       {isShowPage.product && <ProductPage />}
       {isShowPage.cart && <CartPage showProduct={showProduct} />}
    </div>
  );
}

export default App;
