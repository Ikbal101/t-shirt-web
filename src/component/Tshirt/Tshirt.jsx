import React from 'react';
import './Tshirt.css'

const Tshirt = ({tShirt,handleAddToCart}) => {
    const{picture,name,gender,price}=tShirt
    return (
        <div className='details'>
            <img src={picture} alt="" />
            <h2>Name:{name}</h2>
            <h3>Gender:{gender?gender:"Both"}</h3>
            <h3><b>Price:${price}</b></h3>
            <button onClick={()=>handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;