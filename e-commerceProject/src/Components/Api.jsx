import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {

    const url = 'https://ecomerce-master.herokuapp.com/api/v1/item'

    const [productsArray, setproductsArray] = useState([])
    useEffect(() => {
        axios
            .get(`${url}`)
            .then(({ data }) => setproductsArray(data.results))
            .catch((error) => console.log("error calling SWAPI", error))
            console.log(productsArray)
    }, [])
    return (
        <div>
        
        </div>
    )
}

export default Api