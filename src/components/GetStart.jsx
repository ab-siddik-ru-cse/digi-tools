import React from 'react'
import userImg from '../assets/user.png'
import userPackage from '../assets/package.png'
import userRocket from '../assets/rocket.png'


const GetStart = () => {
    return (
        <div className='bg-[#F9FAFC] mt-30 py-30'>
            <div className='text-center space-y-5'>
                <h1 className="text-5xl text-[#101727] font-bold">Get Started in 3 Steps</h1>
                <p className='text-[#627382] text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-3 max-w-300 mx-auto mt-10 gap-8'>
                <div className="card w-96 bg-base-100 ">
                    <div className="card-body border-2 border-gray-200 rounded-2xl">
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white  badge absolute top-2 right-2 py-4.5'>01</span>
                        <div className='flex flex-col items-center justify-center space-y-5 mt-15'>
                            <div className='bg-purple-100 rounded-full w-25 h-25 flex items-center justify-center'>
                                <img className='text-xl flex items-center justify-center' src={userImg} alt="" />
                            </div>
                            <h1 className="text-2xl text-[#101727] font-bold">Create Account</h1>
                            <p className='text-[#627382] text-[16px] text-center mb-15'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 ">
                    <div className="card-body border-2 border-gray-200 rounded-2xl">
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white  badge absolute top-2 right-2 py-4.5'>02</span>
                        <div className='flex flex-col items-center justify-center space-y-5 mt-15'>
                            <div className='bg-purple-100 rounded-full w-25 h-25 flex items-center justify-center'>
                                <img className='text-xl flex items-center justify-center' src={userPackage} alt="" />
                            </div>
                            <h1 className="text-2xl text-[#101727] font-bold">Choose Products</h1>
                            <p className='text-[#627382] text-[16px] text-center mb-15'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                        </div>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 ">
                    <div className="card-body border-2 border-gray-200 rounded-2xl">
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white  badge absolute top-2 right-2 py-4.5'>03</span>
                        <div className='flex flex-col items-center justify-center space-y-5 mt-15'>
                            <div className='bg-purple-100 rounded-full w-25 h-25 flex items-center justify-center'>
                                <img className='text-xl flex items-center justify-center' src={userRocket} alt="" />
                            </div>
                            <h1 className="text-2xl text-[#101727] font-bold">Start Creating</h1>
                            <p className='text-[#627382] text-[16px] text-center mb-15'>Download and start using your premium <br />tools immediately.</p>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default GetStart
