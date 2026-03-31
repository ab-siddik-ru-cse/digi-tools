import React, { use } from 'react'
import Product from './Product';

const Products = ({dataPromise}) => {
    const products = use(dataPromise);

    console.log(products);
    
    return (
        <div className='mt-30'>
            <div className='text-center space-y-5'>
                <h1 className='text-4xl font-bold text-black'>Premium Digital Tools</h1>
                <p className='text-sm'>Choose from our curated collection of premium digital products designed
                    <br />
                    to boost your productivity and creativity.</p>
            </div>
            <div className='mb-50'>
                <div className='flex items-center justify-center gap-3'>
                    <button className='btn bg-transparent'>Products</button>
                    <button className='btn bg-transparent'>Cart</button>
                </div>
            </div>
            <div className='grid grid-cols-3 max-w-350 gap-5 mx-auto'>
                {
                    products.map(product => <Product key={product.id} product ={product}></Product>)
                }
            </div>


        </div>
    )
}

export default Products
