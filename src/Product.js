import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
    return (
        <li className="product">
            <img className="product__img" src={props.src} alt={props.alt} />
            <div className="product__info">
                <h2 className="product__name">{props.name}</h2>
                <p className="product__price">${props.price}</p>
            </div>
            <button className="btn product__btn" onClick={props.onClick}>Add to cart</button>
        </li>
    ); 
};

export default Product; 