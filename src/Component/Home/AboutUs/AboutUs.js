import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './AboutUs.css'
import img1 from '../../../images/Image/adult-blur-blurred-background-687824.png'
import img2 from '../../../images/Image/chef-cook-food-33614.png'
import img3 from '../../../images/Image/architecture-building-city-2047397.png'



const AboutUs = () => {
    return (
        <div className="container">
            <div className="w-50 text-center mx-auto">
                <h2>Why you choose us</h2>
                <p>Barton waited twenty always repair in within we do.An delighted offending curiosity my is dashwoods at. Boy prosperoud at.An delighted offending curiosity my is dashwoods at. </p>
            </div>
            <div className="row mx-auto gy-3 text-center m-4">
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Fast Delivery</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="warning text-white">See More</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" height="250px" src={img2} />
                        <Card.Body>
                            <Card.Title>A Good Responder</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="warning text-white">See More</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Home Delivery</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="warning text-white">See More</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;