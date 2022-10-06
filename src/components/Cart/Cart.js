import React from 'react';
import Added from '../addedMeal/Added'
import "./Cart.css";

const Cart = ({ cart }) => {

    // console.log(cart)
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            {
                cart.map(each => <Added addCart={each} key={each.idMeal}></Added>)
            }
        </div>
    );
};

export default Cart;