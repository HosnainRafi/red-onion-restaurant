import React from 'react';

const SingleBreakfast = (props) => {
    const {id,name,description,price,img} =props.food;
    return (
        <div className="col-md-4">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
        </div>
    );
};

export default SingleBreakfast;