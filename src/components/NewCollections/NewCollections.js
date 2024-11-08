import React from "react";
import './NewCollections.css'
import new_collection from '../assets/new_collections'
// import Item from "../Item/Item";

const NewCollections = () => {
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
            {new_collection.map((item, i) => {
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

export default NewCollections;