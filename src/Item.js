import React from 'react';
import PlusMinusButton from './PlusMinusButton';

const Item = props => {
    return(
        <li className="item">
            <img className="item__img" src={props.src} alt={props.alt} /> 
            <div className="item__info"> 
                <h2 className="item__title">{props.name}</h2>
                <p className="item__price">{props.price}</p>
            </div>
            <div className="item__controls">
                <PlusMinusButton 
                    value={props.value}
                    onClickingDecrement={props.onClickingDecrement}
                    onClickingIncrement={props.onClickingIncrement}
                />
                <button className="btn btn--remove" onClick={props.onRemove}>remove</button>
            </div>
        </li>
    );
};

export default Item; 