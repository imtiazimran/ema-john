import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Review_Items = ({ items, removeItem }) => {
    const { name, price, quantity, img, id } = items
    return (
        <div className='ReviewItem'>
            <img src={img} alt="" />
            <div className='ReviewItemInfo'>
                <p className='ItemTitle'>{name}</p>
                <p>Price: <span className='textOrenge'>${price}</span></p>
                <p>Quantity: <span className='textOrenge'>{quantity}</span></p>
            </div>
            <button onClick={() => removeItem(id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
    );
};

export default Review_Items;