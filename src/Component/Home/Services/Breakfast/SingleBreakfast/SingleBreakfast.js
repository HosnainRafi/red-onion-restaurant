import { AccordionDetails } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './SingleBreakfast.css'

const SingleBreakfast = (props) => {

    let history = useHistory();
    const handleDetails = (id) => {
        history.push(`/home/breakfast/${id}`);
    }

    const {id,name,img,price,details} =props.food;
    console.log(props.food);
    return (
        <div  className="col-md-4 text-center mx-auto m-4 p-4 breakfast">
            <img style={{width:'200px'}} src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Details: {details.slice(0,35)}</p>
            <h2>Price: {price}</h2>
            <button className="btn btn-warning"><Link
                        className='text-decoration-none text-white'
                        to={`/home-breakfast/${id}`}>Details</Link></button>
        </div>
    );
};

export default SingleBreakfast;