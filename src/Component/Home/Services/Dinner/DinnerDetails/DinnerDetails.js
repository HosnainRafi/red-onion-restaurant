import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './DinnerDetails.css'


const DinnerDetails = () => {
    
    const { serviceId } = useParams();
    const [food, setFood] = useState();
    const [quantity, setQuantity] = useState(1);
    const [navQuantity, setNavQuantity] = useState(0);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/HosnainRafi/red-onion-restaurant/main/public/meal.json')
            .then(res => res.json())
            .then(data => {
                setFood(data.find(d => d.id === Number(serviceId)) || {});
            }).catch((error) => {
                console.log(error)
            })
    }, [serviceId])

    const handleAddToQuantityPlus = () => {
        setQuantity(quantity + 1);
    }

    const handleAddToQuantityMinus = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const handleAddToCart = () => {
        setNavQuantity(quantity)
    };
    
       let newPrice = food?.price * quantity
    


    return (
        <div className="container details">
            <div className="row g-4">
                <div className="col-md-5 pt-4">
                    <h1>{food?.name}</h1>
                    <br />
                    <br />
                    <p>{food?.details}</p>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <h2>$ {newPrice}</h2>
                        </div>
                        <div className="col-md-6">
                            <span className="ms-5 border btn btn-danger rounded-pill px-4 py-2 fs-3">
                                <span onClick={handleAddToQuantityMinus} className="cursor-pointer " >-</span>
                                <span className="mx-3">{quantity}</span>
                                <span onClick={handleAddToQuantityPlus} className="cursor-pointer ">+</span>
                            </span>
                        </div>
                    </div>
                    <br />
                    <button onClick={handleAddToCart} className='btn btn-danger rounded-pill px-4 py-2'><FontAwesomeIcon icon={faShoppingCart} />Add</button>
                </div>
                <div className="col-md-7 container-fluid pb-4 d-flex justify-content-center align-items-center">
                    <img className="img-fluid me-auto align-items-end" src={food?.img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default DinnerDetails;