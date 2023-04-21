import {React,  useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => id === product.id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])
    const handleCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    const deleteCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    
    return (
        <div className='mainContainer'>
            <div className="shoppingContainer">
                {
                    products.map(product => <Products handleCart={handleCart} key={product.id} product={product}></Products>)
                }
            </div>
            <div className={cart.length !== 0 ? "cartContainer" : "d-none"}>
                <Cart deleteCart={deleteCart} cart={cart}>
                    <button><Link className='OrderReviewBtn' to="/order_review"> Review Order <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Link></button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;