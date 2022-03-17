import React from 'react'
import {selectItems,selectItemsTotal} from '../slice/basketSlice';
import { useSelector } from 'react-redux';
import './Cart.css';
import CartItem from './CartItem';
function Cart() {
    const basket = useSelector(selectItems);
    const total = useSelector(selectItemsTotal);

    
    const removeitemBasket = () => {
      console.log(basket)
    }

  return (
    <div className="cart__container">
        <div className="cart__img">
        <img className="checkout__add" src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='add' />
        </div>
        <div className="cart__body">
            {
             ( basket?.length == 0) ? (
                <h1>Your cart is empty</h1>
              ):(
                basket.map(item => (
                   <CartItem id={item.id} title={item.title} img={item.img} price={item.price}/>
                ))
              )
            }
            <div className="priceccard">
            <h1>subtotal</h1>
            <h1>total price {total}</h1>
            <button>checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart