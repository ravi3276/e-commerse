import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Product.css';
import { TailSpin } from 'react-loader-spinner';
import Item from './Item';
import items from '../dummyData.js';
function Product() {
  const [products, setProducts] = useState(items);
  const [loading, setLoading] = useState(true);
  return (
    <div> 
        <h1 className="title">latest products</h1>
    <div className="product__container">
        {
            products.map(product=>(
                <Item key={product.id}
                id={product.id}
                 product={product.title} 
                 img={product.image}
                 description={product.description}
                 price={product.price}
                 />
            ))
        }
    </div>
    </div>
  )
}

export default Product