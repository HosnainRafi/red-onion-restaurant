import React from 'react';

const SingleBreakfast = (props) => {
    const {id,name,img,price} =props.food;
    return (
        <div className="col-md-4">
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
        </div>
    );
};

export default SingleBreakfast;