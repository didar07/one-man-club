import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    const { time, age, picture, title } = cart || {}
    return (
        <div>
            <img src={picture} alt="" />
            <p>{time}</p>
            <p>{age}</p>
        </div>
    );
};

export default Cart;