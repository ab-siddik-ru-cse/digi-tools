import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Products from './components/Products'

const getData = async () =>{
    const res = await fetch('./data.json');
    return res.json();
}

const dataPromise = getData();


function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Stats/>
    <Products dataPromise = {dataPromise}/>
    </>
  )
}

export default App
