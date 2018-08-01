import React from 'react'; 
import PropTypes from 'prop-types';

const PlusMinusButton = props => {
    return(
        <form className="plus-minus">
            <button className="plus-minus__btn" onClick={props.onClickMinusButton}>-</button>
            <input className="plus-minus__field" type="number" value={props.numberField} onChange={props.onChangeNumberField} />
            <button className="plus-minus__btn" onClick={props.onClickPlusButton}>+</button>
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