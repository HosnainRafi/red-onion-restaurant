import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark p-4 mt-4">
            <div className="container p-4 mb-4">
                <div className="row">
                    <div className="col-md-6">
                        <img style={{ width: '300px' }} src={logo} alt="" />
                    </div>
                    <div className="col-md-3 text-white">
                        <h6>About our blog</h6>
                        <h6>Read our blog</h6>
                        <h6>Sign up to deliver</h6>
                        <h6>Add your restaurant</h6>
                    </div>
                    <div className="col-md-3 text-white">
                        <h6>Get Help</h6>
                        <h6>Ask question</h6>
                        <h6>View All Cities</h6>
                        <h6>Restaurant near me</h6>
                    </div>
                </div>
            </div>
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-7">
                        <p><small>©Copyright by red-onion-restaurant</small></p>
                    </div>
                    <div className="col-md-5">
                        <div className="row g-3">
                            <div className="col-md-4">
                                <h6>Privacy Policy</h6>
                            </div>
                            <div className="col-md-4">
                                <h6>Terms of use</h6>
                            </div>
                            <div className="col-md-4">
                                <h6>pricing</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;