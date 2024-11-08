import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className="item-card">
            <Link to={`/product/${id}`}>
                <img onClick={window.scrollTo(0, 0)} src={image} alt={name || "Product image"} />
            </Link>
            
            <p className="item-name">{name}</p>
            <div className="item-prices">
                <div className="item-prices-new">
                    ₹{new_price}
                </div>
                {old_price && (
                    <div className="item-prices-old">
                        ₹{old_price}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Item;
