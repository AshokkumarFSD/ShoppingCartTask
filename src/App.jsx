import { useState } from 'react'
import './App.css'
import Header from './components/SiteHeader';
import IntroSlide from './components/IntroSlide';
import SingleProduct from './components/SingleProduct';

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  // products details array with id,name and price
  const products = [{
    id: 1,
    name: "Lenovo Laptop",
    price: "45,783"
  },
  {
    id: 2,
    name: "Dell Laptop",
    price: "46,683"
  },
  {
    id: 3,
    name: "Apple Laptop",
    price: "1,45,783",
    ratings:3
  },
  {
    id: 4,
    name: "Acer Laptop",
    price: "78,783"
  },
  {
    id: 5,
    name: "Hp Laptop",
    price: "86,745",
    ratings:4
  }];

  // combing all the created component
  return (
    <>
      <Header count={cartCount}></Header>
      <IntroSlide></IntroSlide>
      <div className='product_coordinator'>
        {products.map((val,idx)=>(
          <SingleProduct
           key={idx} 
           product={val}
           cartItems={cartItems}
           setCartItems={setCartItems}
           cartCount={cartCount}
           setCartCount={setCartCount}
           ></SingleProduct>
        ))}
      </div>
    </>
  )
}


export default App
