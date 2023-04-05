import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0

    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }
    let tax = totalPrice * 7 / 100;
    let granTotal = totalPrice + totalShipping + tax;
    return (
        <div>
            <h4>Order Summary</h4>
            <div className='cartDetails'>
                <p>Selected Item: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${granTotal}</h5>
            </div>
            <div className="cartBtn">
                <button> Clear Cart</button>
                <button> Review Order</button>
            </div>
        </div>


    );
};

export default Cart;