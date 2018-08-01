import React from 'react'; 
import PropTypes from 'prop-types';

const PlusMinusButton = props => {
    return(
        <form className="plus-minus-button">
            <button className="btn btn--minus" onClick={props.onClickMinusButton}>-</button>
            <input type="number" value={props.numberField} onChange={props.onChangeNumberField} />
            <button className="btn btn--plus" onClick={props.onClickPlusButton}>+</button>
        </form>    
    );
}

PlusMinusButton.propTypes = {
    numberField: PropTypes.number.isRequired, 
    onClickPlusButton: PropTypes.func.isRequired, 
    onClickMinusButton: PropTypes.func.isRequired, 
    onChangeNumberField: PropTypes.func.isRequired,
}

export default PlusMinusButton; 