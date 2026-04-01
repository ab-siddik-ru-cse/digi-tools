import React from 'react'

const Workflow = () => {
    return (
        <div className='py-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='text-center space-y-5'>
                <h1 className="text-5xl text-white font-bold">Ready to Transform Your Workflow?</h1>
                <p className='text-white text-[16px]'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 pt-4 items-center justify-center">
                <button className="btn px-4 py-6 bg-white rounded-full transition-all duration-300 ease-in-out hover:scale-105">
                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Explore Products</span>
                </button>
                <button className="btn px-8 py-6 bg-transparent rounded-full border-white text-white transition-all duration-300 ease-in-out hover:scale-105">
                    View Pricing
                </button>
            </div>
            <div className='text-center my-5'>
                <p className='text-white text-[16px]'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>

        </div>
    )
}

export default Workflow
