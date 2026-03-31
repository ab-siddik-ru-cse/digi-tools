import React, { useState } from 'react'

const Product = ({ product }) => {
    const [buyNow , setBuyNow] = useState('Buy Now');

    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <span className='bg-[#E1E7FF] text-purple-500 badge absolute top-2 right-2 p-4 rounded-full'>{product.tagType}</span>
                <div className='border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center'>
                    <p className='text-xl flex items-center justify-center'>{product.icon}</p>
                </div>
                <div className="flex justify-between">
                    <h2 className="text-3xl text-[#101727] font-bold">{product.name}</h2>
                </div>
                <p className='text-[#627382] text-lg'>{product.description}</p>
                <p><span className="text-3xl font-bold">$29</span> <span className='text-[#627382] text-lg'>/{product.period}</span></p>
                <ul className="mt-1 flex flex-col gap-1 text-xs">
                    <li className='text-[#627382] text-lg'>
                        <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                        <span>{product.features[0]}</span>
                    </li>
                    <li className='text-[#627382] text-lg'>
                        <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                        <span>{product.features[1]}</span>
                    </li>
                    <li className='text-[#627382] text-lg'>
                        <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                        <span>{product.features[2]}</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button onClick={()=>setBuyNow('Added to cart')} className="p-6 btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white btn-block">{buyNow}</button>
                </div>
            </div>
        </div>
    )
}

export default Product
