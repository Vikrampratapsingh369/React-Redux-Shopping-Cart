import React from 'react';
import './App.css';
import MyShoppingCrat from './components/shopingCartView/ShoppingCart';


let App:React.FC = () => {
  return (
      <React.Fragment>
        <div className="App">
          <h2>Redux Shopping Cart</h2>
        </div>
        <MyShoppingCrat />

      </React.Fragment>

  );
}

export default App;
