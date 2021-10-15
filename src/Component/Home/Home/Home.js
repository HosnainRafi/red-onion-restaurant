import React, { useState } from 'react';
import './Home.css'
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Breakfast from '../Services/Breakfast/Breakfast';
import Services from '../Services/Services/Services';

const Home = () => {



    
    const [isClicked,setIsClicked] = useState(false);
    const meals = e => {
        setIsClicked(true);
        e.preventDefault()
    }
    return (
        <div>
            <Banner></Banner>
            <div className="container w-50 text-center mx-auto services">
            <h2>Click To See our best Items.We provide you best food in the city</h2>
            <button onClick={meals} className="btn btn-warning text-white">See Foods</button>
            </div>
            { isClicked &&
                <Services></Services>
                }
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;