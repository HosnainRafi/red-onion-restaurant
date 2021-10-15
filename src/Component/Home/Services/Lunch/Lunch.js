import React from 'react';
import useMeal from '../../../../hooks/useMeal';
import SingleLunch from './SingleLunch/SingleLunch';



const Lunch = () => {
    
    const { foods } = useMeal();
    return (
        <div className="container">
            <div className="row m-4 p-4">
                {
                    foods.slice(6, 12).map(food => <SingleLunch
                        key={food.id}
                        food={food}
                    ></SingleLunch>)
                }
            </div>
        </div>


    );
};

export default Lunch;