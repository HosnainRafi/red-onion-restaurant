import React from 'react';
import './SingleLunch.css';

const SingleLunch = (props) => {
    const { name, img, price, details } = props.food;
    console.log(props.food);
    return (
            <div className="col-md-4 p-3 breakfast mx-auto text-center lunch">
                <img style={{ width: '200px' }} src={img} alt="" />
                <h4>Name: {name}</h4>
                <p>Details : {details.slice(0, 35)}</p>
                <h2>Price: {price}$</h2>
            </div>
    );
};

export default SingleLunch;