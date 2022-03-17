import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../slice/basketSlice';

function Item({id,title,price,img,description}) {
    const dispatch = useDispatch();
    function truncate(input) {
        if (input.length > 100) {
           return input.substring(0, 100) + '...';
        }
        return input;
     };
     
     const addToBasket=()=>{
         const product = {id,title,price,img,description}
         dispatch(addItem(product))
     }
  return (
    <div className="products">
            <p>{title}</p>
            <img src={img} alt={title} style={{height:"100px"}}/>
            <p>{truncate(description)}</p>
            <p>{price}</p>
            <button className="btn" onClick={addToBasket}>add to cart</button>
    </div>
  )
}

export default Item
