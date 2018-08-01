import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem'; 

const CartItems = props => {

    var cartItems = props.cartItems.map((item, index) => {
        return (
            <CartItem 
                key={item.id}
                src={item.picture}
                alt={item.alt}
                name={item.name}
                price={item.price}
                numberField={item.quantity}
                onChangeNumberField={
                    (e) => { 
                        e.preventDefault(); 
                        props.onChangeNumberField(item.id, e.target.value);
                    }     
                }
                onClickMinusButton={
                    (e) => {
                        e.preventDefault();
                        props.onClickMinusButton(item.id); 
                    }
                }
                onClickPlusButton={
                    (e) => {
                        e.preventDefault(); 
                        props.onClickPlusButton(item.id); 
                    }
                }
                onClickRemoveButton={
                    (e) => {
                        e.preventDefault();
                        props.onClickRemoveButton(item.id);
                    }
                }
            />
        );
    });
    
    return (
        <ul className="cart-items"> 
            {cartItems} 
        </ul>
    );
    
};

CartItems.propTypes = {
  onClickRemoveButton: PropTypes.func.isRequired, 
  onClickPlusButton: PropTypes.func.isRequired, 
  onClickMinusButton: PropTypes.func.isRequired
};

export default CartItems; 