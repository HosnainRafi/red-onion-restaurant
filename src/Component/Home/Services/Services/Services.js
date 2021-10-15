import React, { useEffect, useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './Services.css'

const Services = () => {

    

    
    return (
        <>

            <ul class="nav justify-content-center">
                <li class="nav-item m-4">
                    <NavLink className="navlink" activeClassName="active text-danger" activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                        borderBottom: "4px solid gold"
                    }} to="/home/breakfast">BreakFast</NavLink>
                </li>
                <li class="nav-item m-4">
                    <NavLink className="navlink" activeClassName="active text-danger" activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                        borderBottom: "4px solid gold"
                    }} to="/home/lunch">Lunch</NavLink>
                </li>
                <li class="nav-item m-4">
                    <NavLink className="navlink" activeClassName="active text-danger" activeStyle={{
                        fontWeight: "bold",
                        color: "red",
                        borderBottom: "4px solid gold"
                    }} to="/home/dinner">Dinner</NavLink>
                </li>
            </ul>



            <Switch>
                <Route path="/home/breakfast" component={Breakfast}></Route>
                <Route path="/home/lunch" component={Lunch}></Route>
                <Route path="/home/dinner" component={Dinner}></Route>
            </Switch>
        </>
    );
};

export default Services;