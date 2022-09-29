import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, handleAddToList } = props
    const { time, age, picture, title } = cart || {}

    return (
        <div>

            <div className='cart-details'>
                <img src={picture} alt="" />
                <h3>Title: {title}</h3>
                <p>Age: {age}</p>
                <p>Time Required:{time}</p>
                <button onClick={() => handleAddToList(cart)} className='list-btn'>Add to List</button>
            </div>
        </div>
    );
};

export default Cart;