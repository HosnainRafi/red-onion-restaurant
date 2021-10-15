import React, { useEffect, useState } from 'react';
import useMeal from '../../../../hooks/useMeal';
import SingleBreakfast from './SingleBreakfast/SingleBreakfast';

const Breakfast = () => {

    const {foods} = useMeal();


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