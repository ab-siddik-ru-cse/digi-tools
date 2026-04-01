import React from 'react'

const Stats = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-12 md:py-16 px-4'>
            
            <div className='max-w-6xl mx-auto'>
                
                <div className='grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-purple-400'>
                    
                    <div className='py-6 space-y-2'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white'>
                            50K+
                        </h1>
                        <p className='text-sm md:text-lg text-purple-200'>
                            Active Users
                        </p>
                    </div>

                    <div className='py-6 space-y-2'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white'>
                            200+
                        </h1>
                        <p className='text-sm md:text-lg text-purple-200'>
                            Premium Tools
                        </p>
                    </div>

                    <div className='py-6 space-y-2'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white'>
                            4.9
                        </h1>
                        <p className='text-sm md:text-lg text-purple-200'>
                            Rating
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats