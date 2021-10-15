import React from 'react';

const SingleDinner = (props) => {
    const { id, name, img, price, details } = props.food;
    return (
            <div className="col-md-4 p-3 dinner mx-auto text-center">
                <img style={{ width: '200px' }} src={img} alt="" />
                <h4>Name: {name}</h4>
                <p>Details : {details.slice(0, 35)}</p>
                <h2>Price: ${price}</h2>
            </div>
    );
};

export default SingleDinner;