import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
     <NavBar />
      <CartWidget />
      <Product />
    </div>
  );
}

export default App;