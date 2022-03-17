import React from 'react'
import { useDispatch } from 'react-redux';
import {addItem,removeItem} from '../slice/basketSlice';

function CartItem({id,title,price,img,description}) {
    const dispatch=useDispatch();
    const addProduct = () => {
        // dispatch(addItem({id,title,price,img,description}))
    }
    const removeProduct=()=>{
        dispatch(removeItem({id}));
    }
  return (
    <div className="cart__item">
      <div className="cart_product">
    <div className="cart__item__img"> 
        <img src={img} alt=""/>
    </div>
    <div className="cart__item__info">
        <p>{price}</p>
        <p>{description}</p>
    </div>
    <button onClick={addProduct}>add item</button>
    <button onClick={removeProduct}>remove item</button>
     </div>  
</div>

  )
}

export default CartItem