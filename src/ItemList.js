import React from 'react';
import Item from './Item'; 

const ItemList = props => {

    var items = props.items.map((item, index) => {
       return (
            <Item 
                key={item.id} 
                src={item.picture} 
                alt={item.alt} 
                name={item.name} 
                price={item.price}
                value={item.quantity}
                id={item.id}
                onClickingIncrement={(e) => { 
                    e.preventDefault();
                    props.incrementQuantityByOne(item.id) } 
                }
                onChange={props.onChange}
                onRemove={(e) => { e.preventDefault(); props.removeAt(item.id) } }
                onClickingDecrement={(e) => {
                    e.preventDefault();
                    props.decrementQuantityByOne(item.id);
                }}
            />
        );
    });
    
    return (
        <ul className="items"> 
            {items} 
        </ul>
    );
    
};

export default ItemList; 