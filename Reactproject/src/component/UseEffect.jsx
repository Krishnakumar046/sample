import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [cart, setcart] = useState([]);
    useEffect(() => {
        console.log('useEffect is called')
        fetch("'https://dummyjson.com/products'")
            .then(response => response.json())
            .then(result => setcart(result.products))
            .then(error => console.log(error))
    }, [])
    return (
        <div className='d-flex flex-row flex-wrap gap-5'>
            {
                cart.map((item, index) => {
                    return (
                        <div className='d-flex flex-row flex-wrap'>
                            <div class="card" style={{ width: " 18rem" }} key={index}>
                                <img src={item.images} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{item.brand}</h5>
                                    <p class="card-text">{item.description}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
