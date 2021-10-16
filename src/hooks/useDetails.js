import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const useDetails = () => {

    const [food,setFood] = useState();
    const {serviceId} = useParams();
    const [quantity,setQuantity] = useState(0);
    const [navQuantity,setNavQuantity] = useState(0);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/HosnainRafi/red-onion-restaurant/main/public/meal.json')
        .then(res => res.json())
        .then(data => {
            setFood(data.find(d => d.id === Number(serviceId)) || {});
        }).catch((error) => {
            console.log(error)
        })
    },[serviceId])

    const handleAddToQuantityPlus = (quantity) => {
        setQuantity(quantity + 1);
    }

    const handleAddToQuantityMinus = (quantity) => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const handleAddToCart = () => {
        setNavQuantity(quantity)
    };

    return {
        handleAddToCart,
        handleAddToQuantityMinus,
        handleAddToQuantityPlus,
        quantity,
        navQuantity,
        food
    }
};

export default useDetails;