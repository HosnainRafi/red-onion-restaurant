import React, { useEffect, useState } from 'react';

const useMeal = () => {

    const [foods,setFoods] = useState([])
    const [search,setSearch] = useState([])


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/HosnainRafi/red-onion-restaurant/main/public/meal.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);

    return {
        foods,
        search,
        setSearch
    }
};

export default useMeal;