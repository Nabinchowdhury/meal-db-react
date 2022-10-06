import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart'
import "./Shop.css"

const Shop = () => {
    const [meals, setMeal] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, []);
    const addToCart = (selectedMeal) => {
        let newCart = []
        const exist = cart.find(pd => selectedMeal.idMeal === pd.idMeal)
        if (!exist) {
            selectedMeal.quantity = 1
            newCart = [...cart, selectedMeal]
        }
        else {
            selectedMeal.quantity += 1
            const rest = cart.filter(pd => selectedMeal.idMeal !== pd.idMeal)
            newCart = [...rest, selectedMeal]
        }
        setCart(newCart)
    };
    return (
        <div className='shop-container'>
            <div className='meal-container'>
                <input type="text" name="" id="" placeholder='Search your food' className='search-field' />
                <div className='meals'>
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal} addToCart={addToCart}></Meal>)
                    }</div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Shop;