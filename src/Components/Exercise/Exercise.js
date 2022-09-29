import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Cart from '../Cart/Cart';
import './Exercise.css'
import Swal from 'sweetalert2'
import { AddToDb } from '../fakedb';

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

    useEffect(() => {
        let breake;
        let stored = localStorage.getItem('breake time')
        if (stored) {
            breake = JSON.parse(stored)
        }
        setBreake(breake)
    }, [])


    const handleActivity = () => {
        Swal.fire(
            'Good job!',
            'Your  Activity is Completed!',
            'success'
        )
    }


    const [breake, setBreake] = useState(0)
    const handleBreake = (newBreake) => {
        setBreake(newBreake)
        AddToDb(newBreake)
    }


    let time = 0
    for (const cart of list) {
        time = time + cart.time
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
                    <p>chittagong, Bangladesh</p>
                </div>

                <Break handleBreake={handleBreake}></Break>
                <div className='exerecise-details'>
                    <h1>Exercise Detail</h1>
                    <h2>Exercise time: {time}s</h2>
                    <h2>Break Time: {breake}</h2>
                </div>
                <div className='activity-btn'>
                    <button onClick={handleActivity}>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;