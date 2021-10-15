import React from 'react';
import useMeal from '../../../../hooks/useMeal';
import SingleDinner from './SingleDinner/SingleDinner';

const Dinner = () => {
    const { foods } = useMeal();
    return (
        <div className="container">
            <div className="row m-4 p-4">
                {
                    foods.slice(12, 18).map(food => <SingleDinner
                        key={food.id}
                        food={food}
                    ></SingleDinner>)
                }
            </div>
        </div>


    );
};

export default Dinner;