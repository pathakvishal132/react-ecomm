// import Header from './components/Header';
import Basket from './Basket';
import Cart from './Cart';
// import data from './data';
import { useState } from 'react';
import ProductService from './services/ProductService';


function App() {

  const fetchProducts = async () => {
    try {
      const { data } = await ProductService.getProducts();
      return data;
    } catch (error) {
      console.error(await error);
    }
  };
  
  fetchProducts()
    .then((data) => {
      // const productArray = Object.entries(data);
      console.log(data);
      return data;
    });
  
  const p = Object.entries(fetchProducts());
  

  //fetching all the products here
  // const getAllProducts = async () => {
  //   try{
  //   const response = await ProductService.getProducts();
  //   const data = response.data;
  //   return data;
  //   }
  //     catch( error ){
  //     console.log(error);
  //   }
  // }

  // cart functionalities are here.
  const [cartItems, setCartItems] = useState([]);
 
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="MainCart">
      {/* <Header countCartItems={cartItems.length}></Header> */}
      <div class='grid inline-flex  grid-cols-3 p-4 '>
        <div class='col-span-2 '>
         <Cart products={p} onAdd={onAdd}/>
        </div>

        <div class='p-4 '>
            <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            ></Basket>
        </div>

      </div>
    </div>
  );
}

export default App;