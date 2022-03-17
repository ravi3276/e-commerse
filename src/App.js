// import React,{useEffect} from 'react'
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Product from './components/Product';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './components/Cart';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={
      <>
      <NavBar />
      <Product />
      </>
      }>   
      </Route>
      <Route path="/cart" element={<><NavBar /><Cart /></>} /> 
    </Routes>
    </div>
  </Router>
  );
}

export default App;
