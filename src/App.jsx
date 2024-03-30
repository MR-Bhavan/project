import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './componant/Home';
import Card from './componant/Card';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className='bg-img'>
      <CartProvider>
      <Home />
      <Card />
      </CartProvider>
    </div>
  )
}

export default App
