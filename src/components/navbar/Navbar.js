import React, { useContext, useState } from "react"
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/ShopContext"



const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick = { ()=>{setMenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick = { ()=>{setMenu("men")}}><Link to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick = { ()=>{setMenu("women")}}><Link to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick = { ()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>LogIn</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='your_cart' /></Link>
                <div className="nav-cart-count">{getTotalCartItems}</div>
            </div>
        </div>
    )
}

export default Navbar;