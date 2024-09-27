import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import toast, { Toaster } from 'react-hot-toast';
export default function App() {
  return (
 <>
 <BrowserRouter>
 <Toaster />
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products' element={<Product/>}/>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<Register/>}></Route>


 </Routes>
 </BrowserRouter>
 
 
 
 </>
  )
}
