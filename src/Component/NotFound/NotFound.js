import React from 'react';
import img from '../../images/404-error.jpg'

const NotFound = () => {
    return (
        <div className="container-fluid mx-auto text-center">
            <img className="img-fluid" src={img} alt="" />
            <h1>Page Not Found</h1>
            <button className="btn brn-primary">Go Home</button>
        </div>
    );
};

export default NotFound;