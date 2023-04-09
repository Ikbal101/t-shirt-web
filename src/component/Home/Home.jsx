import React, { useState } from "react";
import Header from "../Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import './Home.css'
import toast from 'react-hot-toast';


const Home = () => {
  const data = useLoaderData();
  const [cart,setCart]=useState([])

  const handleAddToCart = tshirt =>{
    const exits = cart.find(ts =>ts._id === tshirt._id);
    if(exits){
        toast("You have already added this item in the cart")
    }
    else{
        const newCart = [...cart,tshirt]
        setCart(newCart);
    }
  }

 const RemoveFromCart =id=>{
    const rest = cart.filter(ts => ts._id !== id);
    setCart(rest);
 }
  return (
    <div className="home-container">
      <div className="shirt-container">
        {data.map((tShirt) => (
          <Tshirt key={tShirt._id} tShirt={tShirt} handleAddToCart={handleAddToCart}></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart RemoveFromCart={RemoveFromCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
