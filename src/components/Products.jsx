import React, { use } from 'react'
import Product from './Product';

const Products = ({ dataPromise, cart, setCart }) => {
    const products = use(dataPromise);

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                {products.map(product => (
                    <Product 
                        cart={cart} 
                        setCart={setCart} 
                        key={product.id} 
                        product={product} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Products
