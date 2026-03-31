import React, { use, useState } from 'react'
import Product from './Product';

const Products = ({ dataPromise , cart, setCart}) => {
    const products = use(dataPromise);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-300 gap-8 mx-auto'>
            {products.map(product => <Product cart={cart} setCart={setCart} key={product.id} product={product}></Product>)}
        </div>
    )
}

export default Products
