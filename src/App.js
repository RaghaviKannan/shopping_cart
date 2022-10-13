import './App.css';
import Home from './Home.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Topbar from './Topbar.js';
import Cart from "./Cart.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const products = [
    {
      id: 1,
      name: "Iphone",
      price: "79000",
      img: "https://www.dslr-zone.com/wp-content/uploads/2021/10/2-2-800x800.jpeg"
    },
    {
      id: 2,
      name: "Ipad",
      price: "54000",
      img: "https://th.bing.com/th/id/OIP.qfs6TGczZnZTUsRgieLceAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    },
    {
      id: 3,
      name: "Macbook",
      price: "119900",
      img: "https://th.bing.com/th/id/OIP.Mm6-aCfO5wnybLGnxW39QAHaFv?w=178&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    },
    {
      id: 4,
      name: "Iwatch",
      price: "45900",
      img: "https://th.bing.com/th/id/OIP.p_Zuo7kUMKjU4pXkIUxIcgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    },
    {
      id: 5,
      name: "Airpods",
      price: "19900",
      img: "https://th.bing.com/th/id/OIP.BnAoJbKBnw7faq6XA3SWNgHaJ4?w=178&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    },
    {
      id: 6,
      name: "Homepod mini",
      price: "9900",
      img: "https://th.bing.com/th/id/OIP.lufi65gVb98b7OigFptqKgHaHa?w=178&h=180&c=7pid=ImgDet&rs=1"
    },
  ]
const [cartcount, setCartcount] = useState(0)
const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const addToCart = (product) => {
    setCartcount(cartcount + 1)
    setCartItems([...cartItems, product])
    setTotal(total + parseInt(product.price))
  }
  const removeFromCart=(product)=>{
    const indexVal = cartItems.findIndex(obj => obj.id == product.id)
    cartItems.splice(indexVal,1)
    setCartcount(cartcount - 1)
    setCartItems([...cartItems])
    setTotal(total-parseInt(product.price))
  }
  return (
    <BrowserRouter>
      <Topbar cartcount={cartcount}/>
      <Routes>
        <Route path="/home" element={<Home products={products} addToCart={addToCart} cartItems={cartItems}/>}></Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} total={total} removeFromCart={removeFromCart}/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
