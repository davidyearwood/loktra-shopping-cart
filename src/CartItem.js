import React from 'react';
import PropTypes from 'prop-types';
import PlusMinusButton from './PlusMinusButton';

const CartItem = props => {
    return(
        <li className="cart-item">
            <img className="cart-item__img" src={props.src} alt={props.alt} /> 
            <div className="cart-item__info"> 
                <h2 className="cart-item__title">{props.name}</h2>
                <p className="cart-item__price">{props.price}</p>
            </div>
            <div className="cart-item__controls">
                <PlusMinusButton 
                    quantity={props.quantity}
                    onChangingQuantity={props.onChangingQuantity}
                    onClickingDecrementButton={props.onClickingDecrementButton}
                    onClickingIncrementButton={props.onClickingIncrementButton}
                />
                <button className="btn btn--remove" onClick={props.onClickingRemoveButton}>remove</button>
            </div>
        </li>
    );
};

CartItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    quantity: PropTypes.number.isRequired, 
    onChangingQuantity: PropTypes.func.isRequired,
    onClickingRemoveBtn: PropTypes.func.isRequired,
    onClickingDecrementButton: PropTypes.func.isRequired, 
    onClickingIncrementButton: PropTypes.func.isRequired,
};
export default CartItem; 