import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Cart from '../Cart/Cart';
import './Exercise.css'

const Exercise = () => {

    const [carts, setCarts] = useState([])
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    const handleAddToList = (cart) => {
        const newList = [...list, cart]
        setList(newList)
    }

    return (
        <div className='exercise'>

            <h1>ONE-MAN-CLUB </h1>
            <h2>Select today’s exercis</h2>

            <div className='main-container'>
                {
                    carts?.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                        handleAddToList={handleAddToList}
                    ></Cart>)
                }

            </div>
            <div className='cart-container'>

                <div className='cart-info'>
                    <h2>Didarul Alam</h2>
                    <p>Sydney, Australia</p>
                </div>
                <p>{list.length}</p>
                <Break></Break>

            </div>
        </div>
    );
};

export default Exercise;