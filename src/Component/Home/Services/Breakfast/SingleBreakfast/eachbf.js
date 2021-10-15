import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Eachbf = (props) => {
    const {itemImg,itemTitle,itemDetails,itemPrice} = props.bf
    return (
        <div>
             <Col>
                <Card className="text-center p-4 rounded-3 border-0 meal-item">
                    <Card.Img variant="top" src={itemImg} />
                    <Card.Body>
                        <Card.Title>{itemTitle}</Card.Title>
                        <Card.Text>
                            {itemDetails}
                        </Card.Text>
                        <Card.Text>
                            <p className="fs-4 fw-bold">${itemPrice}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Eachbf;