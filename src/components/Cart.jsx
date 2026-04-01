import React from 'react'
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {

    const handlePayment = () => {
        setCart([]);
        toast.success('Payment Successfull!');
    }

    const handleRemove = (id) => {
        setCart(cart.filter(item => id !== item.id));
        toast.success('Product Remove from Cart!');
    }

    const total = cart.reduce((acc, cur) => acc + cur.price, 0);

    return (
        <div className="px-4 ">

            {cart.length === 0 ? (

                <div className="bg-gray-100 p-10 md:p-16 max-w-2xl mx-auto my-16 md:my-24 text-center space-y-4 rounded-2xl">
                    <i className="fa-solid text-4xl md:text-5xl fa-cart-shopping text-purple-500"></i>
                    <h2 className="text-lg md:text-xl font-bold text-[#101727]">
                        Your cart is empty!
                    </h2>
                </div>

            ) : (

                <div className="max-w-3xl mx-auto bg-white p-4 md:p-6 rounded-2xl shadow-sm">

                    <h1 className='text-lg md:text-xl font-semibold mb-4'>Your Cart</h1>

                    <div className="space-y-4">
                        {cart.map(item => (
                            <div key={item.id} className='bg-gray-100 p-4 rounded-xl'>

                                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>

                                    <div className='flex items-center gap-4'>
                                        <div className='border border-gray-200 bg-white rounded-full w-12 h-12 flex items-center justify-center'>
                                            <p className='text-lg'>{item.icon}</p>
                                        </div>

                                        <div>
                                            <h2 className="text-base md:text-lg font-semibold text-[#101727]">
                                                {item.name}
                                            </h2>
                                            <h3 className='text-[#627382] text-sm md:text-base'>
                                                ${item.price}
                                            </h3>
                                        </div>
                                    </div>

                                    <span
                                        onClick={() => handleRemove(item.id)}
                                        className='text-[#FF3980] text-sm font-medium cursor-pointer hover:underline'
                                    >
                                        Remove
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex items-center justify-between mt-6 text-base md:text-lg'>
                        <span className='text-[#627382]'>Total</span>
                        <span className='font-bold text-lg md:text-xl'>${total}</span>
                    </div>

                    <button
                        onClick={handlePayment}
                        className="mt-6 w-full py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-102"
                    >
                        Proceed to Checkout
                    </button>

                </div>
            )}
        </div>
    )
}

export default Cart