import React from 'react';

const Added = ({ addCart }) => {
    console.log(addCart)
    const { strMeal, quantity } = addCart
    return (
        <div>
            <h5>{strMeal} = {quantity}pcs</h5>
        </div>
    );
};

export default Added;