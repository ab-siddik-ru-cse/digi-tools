import React from 'react'

const Premium = ({ activeTab, setActiveTab,cart }) => {
    return (
        <div className='mt-30'>
            <div className='text-center space-y-5'>
                <h1 className='text-4xl font-bold text-black'>Premium Digital Tools</h1>
                <p className='text-[#627382] text-[16px]'>Choose from our curated collection of premium digital products designed
                    <br />
                    to boost your productivity and creativity.</p>
            </div>
            <div className="flex items-center justify-center mt-5 mb-10 ">
                <div className="relative flex items-center p-1 border-2 border-gray-100 rounded-full w-72 h-14 ">
                    <div
                        className={`absolute top-1 bottom-1 w-[48%] bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full transition-all duration-300 ease-out shadow-lg shadow-purple-200
                        ${activeTab === 'products' ? 'left-1' : 'left-[50%]'}`}
                    ></div>
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`relative z-10 flex-1 h-full text-sm font-semibold transition-colors duration-300 focus:outline-none cursor-pointer
                        ${activeTab === 'products' ? 'text-white' : 'text-gray-600'}`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setActiveTab('cart')}
                        className={`relative z-10 flex-1 h-full text-sm font-semibold transition-colors duration-300 focus:outline-none cursor-pointer
                        ${activeTab === 'cart' ? 'text-white' : 'text-gray-600'}`}
                    >
                        Cart ({cart.length})
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Premium
