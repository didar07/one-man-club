import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    const { time, age, picture, title } = cart || {}
    return (
        <div>

            <div className='cart-details'>
                <img src={picture} alt="" />
                <h3>Title: {title}</h3>
                <p>Age: {age}</p>
                <p>Time Required:{time}</p>
                <button>Add to List</button>
            </div>
        </div>
    );
};

export default Cart;