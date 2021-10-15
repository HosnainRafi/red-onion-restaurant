import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="mx-auto text-center banner">
            <h1>Best Food For Your Belly</h1>
            <div className="container-fluid">
                <form className="d-flex w-50 mx-auto text-center">
                    <input className="form-control rounded-pill" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </div>
    );
};

export default Banner;