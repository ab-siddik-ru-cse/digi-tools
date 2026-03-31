import React from 'react'

const Cart = ({ cart, setCart }) => {
    const handlePayment = () => {
        setCart([]);
    }
    const handleRemove = (id) => {
        setCart(cart.filter(item => id !== item.id));
    }
    const total = cart.reduce((acc, cur) => acc + cur.price, 0);
    return (
        <div>
            {cart.length === 0 ?
                <div className="card bg-gray-100 p-10 max-w-300 mx-auto mb-30">
                    <h2 className="text-xl text-[#101727] font-bold text-center">Your cart is Empty!!</h2>
                </div>

                :
                <div className="card p-10 max-w-300 mx-auto bg-base-100">
                    <div className="card-body border-2 border-gray-200 rounded-2xl">
                        <h1 className='text-xl font-semibold'>Your Cart</h1>
                        {cart.map(item => <div key={item.id} className='bg-gray-100 p-5 rounded-2xl'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-start gap-5 justify-center'>
                                    <div className='border border-gray-200 bg-white rounded-full w-14 h-14 flex items-center justify-center'>
                                        <p className='text-xl flex items-center justify-center'>{item.icon}</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h2 className="text-xl text-[#101727] font-bold">{item.name}</h2>
                                        <h3 className='text-[#627382] text-lg'>${item.price}</h3>
                                    </div>
                                </div>
                                <div>
                                    <span onClick={() => handleRemove(item.id)} className='text-[#FF3980] font-semibold text-sm cursor-pointer'>Remove</span>
                                </div>
                            </div>
                        </div>)}
                        <div className='flex items-center justify-between my-3'>
                            <div className='text-[#627382] text-lg'>Total</div>
                            <div><span className='text-xl font-bold'>${total}</span></div>
                        </div>
                        <div className="mt-6">
                            <button onClick={handlePayment} className="p-6 btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white btn-block">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart
