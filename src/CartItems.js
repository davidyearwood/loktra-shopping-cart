import React from 'react';
import CartItem from './CartItem'; 

const ItemList = props => {

    var cartItems = props.cartItems.map((item, index) => {
       return (
            <CartItem 
                key={item.id} 
                src={item.picture} 
                alt={item.alt} 
                name={item.name} 
                price={item.price}
                quantity={item.quantity}
                id={item.id}
                onChangingQuantity={(e) => {
                    e.preventDefault(); 
                    props.onChangingQuantity(item.id); 
                }}
                onClickingDecrementButton={(e) => {
                    e.preventDefault(); 
                    props.onClickingDecrementButton(item.id); 
                }}
                onClickingIncrementButton={(e) => {
                    e.preventDefault(); 
                    props.onClickingIncrementButton(item.id); 
                }}
                onClickingRemoveButotn={(e) => {
                    e.preventDefault(); 
                    props.onClickingRemoveButton(item.id);
                }}
            />
        );
    });
    
    return (
        <ul className="cartItems"> 
            {cartItems} 
        </ul>
    );
    
};

export default ItemList; 