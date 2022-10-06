import React from 'react';
import "./Meal.css"

const Meal = ({ meal, addToCart }) => {
    // console.log(meal)
    const { strMealThumb, strMeal, strInstructions, idMeal } = meal
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className='meal-info'>
                <h4>{strMeal}</h4>
                <small>Details :{strInstructions ? strInstructions.slice(0, 60) : "nothing to show"}</small>
            </div>
            <button onClick={() => addToCart(meal)}>Add To Cart</button>
        </div>
    );
};

export default Meal;