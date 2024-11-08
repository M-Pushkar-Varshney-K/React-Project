import React from "react";
import './Popular.css'
import data_product from "../assets/data";

const Popular = () => {
    return (
        <div className="popular">
            <h1>Popular in Men</h1>
            <hr />
            <div className="popular-items">
                {data_product.map((item, i) => {
                    return (
                        <div key={i} className="product-item">
                            <img src={item.image} alt={item.name} className="product-image" />
                            <h2 className="product-name">{item.name}</h2>
                            <div className="product-price">
                                <span className="new-price">${item.new_price}</span>
                                <span className="old-price">${item.old_price}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Popular;
