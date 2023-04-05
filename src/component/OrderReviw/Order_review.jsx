import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order_review = () => {
    const cartProducts = useLoaderData()
    console.log(cartProducts)
    return (
        <div className='mainContainer'>
            <div className="shoppingContainer">Cart Product goes here....</div>
            <div className="cartContainer">
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Order_review;