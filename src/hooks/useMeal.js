import React, { useEffect, useState } from 'react';

const useMeal = () => {

    const [foods,setFoods] = useState([])
    const [search,setSearch] = useState([])


    useEffect(() => {
        fetch('meal.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    })

    return {
        foods,
        search,
        setSearch
    }
};

export default useMeal;