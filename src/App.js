import Navbar from "./components/navbar/Navbar"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import LoginSignup from "./pages/LoginSignup"
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'


export default function App() {
  return (
    <h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>

          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>

        </Routes>
      </BrowserRouter>
    </h1>
  )
}