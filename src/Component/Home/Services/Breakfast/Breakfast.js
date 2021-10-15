import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useMeal from '../../../../hooks/useMeal';
import SingleBreakfast from './SingleBreakfast/SingleBreakfast';

const Breakfast = () => {
    const [foods, setFoods] = useState({});
    useEffect(() => {
        fetch('./meal.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])


    return (
        <div className="container">
            <div className="row">
                {
                    foods?.map(food => <SingleBreakfast
                        key={food.id}
                        food={food}
                    ></SingleBreakfast>)
                }
            </div>
        </div>
    );
};

export default Breakfast;