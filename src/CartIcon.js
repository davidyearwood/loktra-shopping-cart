import React from 'react'; 


const CartIcon = (props) => {
    return (
      <div className="cart-icon">
        <span className="cart-icon__counter">{props.counter}</span>
      </div>
    );
};

export default CartIcon; 