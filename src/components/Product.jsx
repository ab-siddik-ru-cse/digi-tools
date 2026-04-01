import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Product = ({ product, cart, setCart }) => {
    const [buyNow, setBuyNow] = useState('Buy Now');

    const themeStyles = {
        'popular': {
            badge: 'bg-[#E1E7FF] text-purple-600',
        },
        'best seller': {
            badge: 'bg-[#FEF3C6] text-[#BB4D00]',
        },
        'new': {
            badge: 'bg-[#DBFCE7] text-[#0A883E]',
        }
    };

    const currentStyle = themeStyles[product.tagType] || themeStyles['popular'];

    const handleBuy = () => {
        if (cart.find(item => item.id === product.id)) {
            toast.error('Item already in cart!');
            return;
        }
        toast.success('Product Added to cart!');
        setBuyNow('Added to cart');
        setCart([...cart, product]);
    }

    return (
        <div className="card w-full max-w-sm bg-base-100 mx-auto transition-transform duration-300 hover:-translate-y-2 will-change-transform">
            <div className="card-body border-2 border-gray-200 rounded-2xl p-6 sm:p-8">
                <span className={`${currentStyle.badge} badge absolute top-2 right-2 p-4 rounded-full text-sm border-none`}>
                    {product.tag}
                </span>

                <div className='border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center mb-2'>
                    <span className='text-xl'>{product.icon}</span>
                </div>

                <div className="flex justify-between">
                    <h2 className="text-xl sm:text-2xl text-[#101727] font-bold">{product.name}</h2>
                </div>

                <p className='text-[#627382] text-base leading-relaxed'>{product.description}</p>

                <p className="my-0">
                    <span className="text-3xl font-bold">${product.price}</span>
                    <span className='text-[#627382] text-lg'>/{product.period}</span>
                </p>

                <ul className="mt-2 flex flex-col gap-1">
                    {product.features.map((feature, index) => (
                        <li key={index} className='text-[#627382] text-base flex items-start'>
                            <i className="fa-solid fa-check mt-1 me-3 text-success"></i>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-4">
                    <button onClick={handleBuy} className={`p-6 btn ${buyNow ==='Buy Now' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'bg-green-600'} text-white rounded-full btn-block `} >{buyNow}</button>
                </div>
            </div>
        </div>
    )
}

export default Product
