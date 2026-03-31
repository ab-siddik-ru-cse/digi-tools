import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Products from './components/Products'
import Cart from './components/Cart'
import Premium from './components/Premium'
import GetStart from './components/GetStart'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const getData = async () => {
  const res = await fetch('./data.json');
  return res.json();
}

const dataPromise = getData();


function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar />
      <Banner />
      <Stats />
      <Premium cart={cart} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'products' && <Products cart={cart} setCart={setCart} dataPromise={dataPromise} />}
      {activeTab === 'cart' && <Cart cart={cart} setCart={setCart} />}
      <GetStart/>
      <Pricing/>
      <Footer/>
    </>
  )
}

export default App
