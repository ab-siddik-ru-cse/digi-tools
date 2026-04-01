import React from 'react'
import userImg from '../assets/user.png'
import userPackage from '../assets/package.png'
import userRocket from '../assets/rocket.png'

const GetStart = () => {
    return (
        <div className='bg-[#F9FAFC] mt-16 md:mt-24 py-16 md:py-24 px-4'>
            
            <div className='text-center space-y-4'>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#101727] font-bold">
                    Get Started in 3 Steps
                </h1>
                <p className='text-[#627382] text-sm md:text-base'>
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-10 gap-6'>
                
                <div className="bg-white p-6 border border-gray-200 rounded-2xl relative transition-transform duration-300 hover:-translate-y-2 will-change-transform">
                    <span className='absolute top-3 right-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm px-2.5 py-2 rounded-full'>
                        01
                    </span>

                    <div className='flex flex-col items-center text-center space-y-6 mt-15'>
                        <div className='bg-purple-100 rounded-full w-25 h-25 flex items-center justify-center'>
                            <img src={userImg} alt=""/>
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold text-[#101727]">
                            Create Account
                        </h1>
                        <p className='text-[#627382] text-sm md:text-base mb-15'>
                            Sign up for free in seconds. No credit card required.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 border border-gray-200 rounded-2xl relative transition-transform duration-300 hover:-translate-y-2 will-change-transform">
                    <span className='absolute top-3 right-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm px-2.5 py-2 rounded-full'>
                        02
                    </span>

                    <div className='flex flex-col items-center text-center space-y-6 mt-15'>
                        <div className='bg-purple-100 rounded-full w-25 h-25 flex items-center justify-center'>
                            <img src={userPackage} alt=""/>
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold text-[#101727]">
                            Choose Products
                        </h1>
                        <p className='text-[#627382] text-sm md:text-base mb-15'>
                            Browse our catalog and select tools that fit your needs.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 border border-gray-200 rounded-2xl relative transition-transform duration-300 hover:-translate-y-2 will-change-transform">
                    <span className='absolute top-3 right-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm px-2.5 py-2 rounded-full'>
                        03
                    </span>

                    <div className='flex flex-col items-center text-center space-y-6 mt-15'>
                        <div className='bg-purple-100 rounded-full w-25 h-25 flex items-center justify-center'>
                            <img src={userRocket} alt="" />
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold text-[#101727]">
                            Start Creating
                        </h1>
                        <p className='text-[#627382] text-sm md:text-base mb-15'>
                            Download and start using your tools immediately.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GetStart