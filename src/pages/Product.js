import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from 'react-router-dom'
import Breadcrum from "../components/Breadcrums/Breadcrums";
import Footer from "../components/Footer/Footer";
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <RelatedProducts/>
            <Footer/>
        </div>
    )
}

export default Product;