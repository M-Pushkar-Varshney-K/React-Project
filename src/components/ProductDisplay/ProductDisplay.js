import React, { useContext, useState } from "react";
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    // State to manage the selected image
    const [selectedImage, setSelectedImage] = useState(product.image);

    // Function to handle thumbnail click
    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {/* Thumbnails for images */}
                    <img
                        src={product.image}
                        alt=""
                        onClick={() => handleThumbnailClick(product.image)}
                    />
                    <img
                        src={product.image}
                        alt=""
                        onClick={() => handleThumbnailClick(product.image)}
                    />
                    <img
                        src={product.image}
                        alt=""
                        onClick={() => handleThumbnailClick(product.image)}
                    />
                    <img
                        src={product.image}
                        alt=""
                        onClick={() => handleThumbnailClick(product.image)}
                    />
                </div>
                <div className="productdisplay-img">
                    {/* Main image */}
                    <img
                        className='productdisplay-main-img'
                        src={selectedImage} 
                        alt=''
                    />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(1,22,536)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-decription">
                    Discover the perfect blend of style and quality with our premium leather jacket collection. Designed for comfort and durability, these jackets add an effortlessly cool edge to any outfit. Shop now for timeless wardrobe essentials that elevate your look.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-btn">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Mordern, Latest</p>
            </div>

        </div>
    )
}

export default ProductDisplay;
