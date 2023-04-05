import { getShoppingCart } from "../../utilities/fakedb"


const LoadProducts = async()=>{
    const loadedData = await fetch("products.json")
    const products = await loadedData.json()
    
    // get existing shopping cart
    const storedCart = getShoppingCart()
    const savedCart = []
    for (const id in storedCart) {
      const addedProduct = products.find(pd => pd.id === id)
      if (addedProduct) {
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct)
      }
    }

    return savedCart
}
export default LoadProducts
