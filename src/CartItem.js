import React from 'react';
import PropTypes from 'prop-types';
import PlusMinusButton from './PlusMinusButton';

const CartItem = props => {
    return(
        <li className="cart-item">
            <div className="cart-item__content">
                <img className="cart-item__img" src={props.src} alt={props.alt} /> 
                <div className="cart-item__info"> 
                    <h2 className="cart-item__title">{props.name}</h2>
                    <p className="cart-item__price">${props.price}</p>
                </div>
            </div>
            <div className="cart-item__controls">
                <PlusMinusButton 
                    numberField={props.numberField}
                    onChangeNumberField={props.onChangeNumberField}
                    onClickMinusButton={props.onClickMinusButton}
                    onClickPlusButton={props.onClickPlusButton}
                />
                <button className="btn--remove" onClick={props.onClickRemoveButton}>remove</button>
            </div>
        </li>
    );
};

CartItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    price: PropTypes.string.isRequired, 
    numberField: PropTypes.number.isRequired, 
    onChangeNumberField: PropTypes.func.isRequired,
    onClickRemoveButton: PropTypes.func.isRequired,
    onClickMinusButton: PropTypes.func.isRequired, 
    onClickPlusButton: PropTypes.func.isRequired,
};
export default CartItem; 