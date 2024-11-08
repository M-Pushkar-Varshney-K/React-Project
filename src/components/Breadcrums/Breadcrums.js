import React from "react";
import './breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
    return (
        <div className="breadcrum">
            HOME <img src={arrow_icon} alt=""/>SHOP <img src={arrow_icon} alt=''/> 
            <span className="category">{product.category}</span>
            <img src={arrow_icon} alt='' /> 
            <span className="product-name">{product.name}</span>
        </div>
    )
}

export default Breadcrum;
