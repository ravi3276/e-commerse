import React,{useState} from 'react'
import './NavBar.css'
import logo from './Flipkart.jpg'
import axios from 'axios';
import styled from "styled-components" 
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectItems} from '../slice/basketSlice';

function NavBar() {
   const [open,setOpen] =useState(false);
    let navigate = useNavigate();
    const basket = useSelector(selectItems);

    const cart=()=>{
      navigate("/cart");
    }
    return (
    <nav className="navbar">
        <div className="navbar__left" onClick={()=>navigate('/')}>
            <img
            className="navbar__logo"
            src="https://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png"
            alt="logo"
            />
            <img 
            className="navbar__mobile"
            src={logo}
            alt="mobilelogo"
            />
        </div>
        <div className="navbar__right">
            <div className="navbar__cart" onClick={cart}>
              <p>cart {basket.length}</p>
              </div>
             <p>shop</p> 
         </div>     
    </nav>

  )
}

export default NavBar
