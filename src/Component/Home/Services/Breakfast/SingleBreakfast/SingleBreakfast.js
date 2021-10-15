import React from 'react';

const SingleBreakfast = (props) => {
    const {id,name,img,price} =props.food;
    console.log(props.food);
    return (
        <div className="col-md-4">
            <img style={{width:'200px'}} src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Details</p>
            <h2>Price: {price}</h2>
        </div>
    );
};

export default SingleBreakfast;