

const LoadProducts = async()=>{
    const loadedData = await fetch("../../src/fakeData/products.json")
    const products = await loadedData.json()
    console.log(products)
    

    // get existing shopping cart
    // const storedCart = getShoppingCart()
    // const savedCart = []
    // for (const id in storedCart) {
    //   const addedProduct = products.find(pd => pd.id === id)
    //   if (addedProduct) {
    //     const quantity = storedCart[id]
    //     addedProduct.quantity = quantity
    //     savedCart.push(addedProduct)
    //   }
    // }

    return products
}
export default LoadProducts
