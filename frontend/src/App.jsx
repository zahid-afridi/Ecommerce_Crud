import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Product from './pages/Product'
export default function App() {
  return (
 <>
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products' element={<Product/>}/>


 </Routes>
 </BrowserRouter>
 
 
 
 </>
  )
}
