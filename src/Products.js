import React from 'react';
import Product from './Product';

const Products = (props) => {
    let productsEl = props.productList.map((product) => {
       return (
         <Product 
            src={product.picture}
            name={product.name}
            key={product.id}
            price={product.price}
            alt={product.alt}
            onClick={(e) => {
                e.preventDefault();
                props.onClick(product.id)
            }}
        />
       ); 
    });
    
    return <ul className="products"> {productsEl} </ul>; 
};

export default Products; 