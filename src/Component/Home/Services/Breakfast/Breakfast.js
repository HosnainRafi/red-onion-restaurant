import React, { useEffect, useState } from 'react';
import SingleBreakfast from './SingleBreakfast/SingleBreakfast';

const Breakfast = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/HosnainRafi/red-onion-restaurant/main/public/meal.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);


    return (
        <div className="container">
            <div className="row">
                {
                    foods.slice(0,6).map(food => <SingleBreakfast
                        key={food.id}
                        food={food}
                    ></SingleBreakfast>)
                }
            </div>
        </div>
    );
};

export default Breakfast;