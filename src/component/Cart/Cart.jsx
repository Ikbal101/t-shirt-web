import React from 'react';
import './Cart.css'

const Cart = ({cart,RemoveFromCart}) => {
    console.log(cart);
    let message;
    if(cart.length === 0 ){
        message = <p>Please add some product</p>
    }
    else{
        message=<div>
            <h2>Thanks for spending money</h2>
            <p ><small>you are boroloks</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 0 ? 'red' : 'green'}>Order Summary:{cart.length}</h2>
            {cart.length >3 ? <span className='orange'>hurrah hurrah</span> :<span className='red'>loooseeerr</span>}
            {message}
            <div>
                {
                    cart.map(tshirt=> <p>{tshirt.name}<button onClick={()=>RemoveFromCart(tshirt._id)}>x</button></p>)
                }
            </div>
            {cart.length === 2 && <p className={`bold ${cart.length === 2 ? "green" : "blue"}`}>life perahin</p>}
            {cart.length ===3 || <h3>koi nai to re add kor</h3>}
        </div>
    );
};

export default Cart;

/* 
    *Conditional Rendering
    1.use if or if else to set a variable that will contain an element,components
    2.ternary operator: condition ? 'for true' : 'false'
    3. Logical && :(if the condition is true then the next thing will displayed)
    4.Logical || (if the condition is false then next thing will displayed)
*/

/*
    Conditional CSS
    1. use ternary
    2. ternary inside template string
*/