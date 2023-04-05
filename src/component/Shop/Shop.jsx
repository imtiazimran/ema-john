import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch("../../fakeData/products.json")
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);
    useEffect(()=>{
        const storedCart = getShoppingCart()
        const savedCart = []
        for(const id in storedCart){
           const addedProduct =  products.find(product => id === product.id)
           if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])
    const handleCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='mainContainer'>
            <div className="shoppingContainer">
                {
                    products.map(product => <Products handleCart= {handleCart} key={product.id} product={product}></Products>)
                }
            </div>
            <div className="cartContainer">
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;