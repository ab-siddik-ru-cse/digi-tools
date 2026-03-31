import React from 'react'

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15'>
            <div className='flex items-center justify-evenly max-w-350 mx-auto'>
                <div className='space-y-3'>
                    <h1 className='text-6xl font-extrabold text-white'>50K+</h1>
                    <p className='text-lg text-purple-200'>Active Users</p>
                </div>
                <div className='border-r border-purple-400 h-20'></div>
                <div className='space-y-3'>
                    <h1 className='text-6xl font-extrabold text-white'>200+</h1>
                    <p className='text-lg text-purple-200'>Premium Tools</p>
                </div>
                <div className=' border-r border-purple-400 h-20'></div>
                <div className='space-y-3'>
                    <h1 className='text-6xl font-extrabold text-white'>4.9</h1>
                    <p className='text-lg text-purple-200'>Rating</p>
                </div>
            </div>
        </div>
    )
}

export default Stats
