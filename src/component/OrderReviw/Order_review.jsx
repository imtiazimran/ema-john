import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review_Items from './Review_Items';
import './Review.css'
import { removeFromDb } from '../../../utilities/fakedb';

const Order_review = () => {
    const cartProducts = useLoaderData()
    const [cart, setCart] = useState(cartProducts)
    const removeItem = (id) =>{
       const newCart = cart.filter(pd => pd.id !== id)
       setCart(newCart)
       removeFromDb(id)
    }
    return (
        <div className='mainContainer'>
            <div className="ReviewItemContainer">
                {
                    cart.map(cartpd => <Review_Items removeItem={removeItem} key={cartpd.id} items={cartpd}></Review_Items>)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order_review;