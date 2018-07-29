import React from 'react'; 
import PropTypes from 'prop-types';

const PlusMinusButton = props => {
    return (
        <form className="plus-minus"> 
            <button className="btn--decrement" onClick={props.onClickingDecrementButton}>-</button>
            <input type="text" value={props.quantity} onChange={props.onChangingQuantity} />
            <button className="btn--increment" onClick={props.onClickingIncrementButton}>+</button>
        </form>
    );
}

PlusMinusButton.propTypes = {
    onClickingDecrementButton: PropTypes.func.isRequired, 
    onClickingIncrementButton: PropTypes.func.isRequired, 
    onChangingQuantity: PropTypes.func.isRequired, 
    quantity: PropTypes.string.isRequired
};

export default PlusMinusButton; 