import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData, } from 'react-router-dom';
import Review_Items from './Review_Items';
import './Review.css'
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Order_review = () => {
    const cartProducts = useLoaderData()
    const [cart, setCart] = useState(cartProducts)
    const removeItem = (id) => {
        const newCart = cart.filter(pd => pd.id !== id)
        setCart(newCart)
        removeFromDb(id)
    }
    const deleteCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='mainContainer'>
        <div className="ReviewItemContainer">
        {cart.length === 0 && <h3>Please Add Some Products To Checkout</h3>}
            
                {
                    cart.map(cartpd => <Review_Items removeItem={removeItem} key={cartpd.id} items={cartpd}></Review_Items>)
                }
            </div>
            <div className="cartContainer">
                <Cart deleteCart={deleteCart} cart={cart}>
                    <button><Link className='OrderReviewBtn' to="/order_review"> Procced Checkout <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon></Link></button>
                </Cart>
            </div>
        </div>
    );
};

export default Order_review;