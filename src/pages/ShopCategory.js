import React, { useContext } from "react";
import './ShopCategory.css';
import { ShopContext } from "../context/ShopContext";
import drop_icon from '../components/assets/dropdown_icon.png';
import Item from "../components/Item/Item";
import Footer from "../components/Footer/Footer";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className="shop-category">
            <img src={props.banner} alt="Category Banner" className="shopcategory-banner" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-5</span> out of {all_product.filter(item => item.category === props.category).length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={drop_icon} alt="Dropdown Icon" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price} // Ensure this line is correct
                            />

                        );
                    }else{
                        return null;
                    }
                })}
            </div>

            <div className="shopcategory-loadmore">
                Explore More
            </div>
            <Footer/>
        </div>
    );
};

export default ShopCategory;
