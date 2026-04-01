import React from 'react'

const Pricing = () => {
    return (
        <div className='py-16 md:py-24 px-4'>
            
            <div className='text-center space-y-4'>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#101727] font-bold">
                    Simple, Transparent Pricing
                </h1>
                <p className='text-[#627382] text-sm md:text-base'>
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-10 gap-6'>
                
                <div className="bg-[#F9FAFC] p-6 border border-gray-200 rounded-2xl flex flex-col 
                justify-between transition-transform duration-300 hover:-translate-y-2 will-change-transform">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#101727]">Starter</h2>
                        <p className='text-[#627382] text-sm md:text-base'>Perfect for getting started</p>

                        <p className='my-6'>
                            <span className="text-3xl md:text-5xl font-bold">$0</span>
                            <span className='text-[#627382] text-sm md:text-lg'> /Month</span>
                        </p>

                        <ul className="space-y-2">
                            <li className='text-[#627382] text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-success"></i> Access to 10 free tools</li>
                            <li className='text-[#627382] text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-success"></i> Basic templates</li>
                            <li className='text-[#627382] text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-success"></i>Community support</li>
                            <li className='text-[#627382] text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-success"></i>1 project per month</li>
                        </ul>
                    </div>

                    <button className="mt-6 py-3 w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-medium">
                        Get Started Free
                    </button>
                </div>

                <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-6 rounded-2xl relative flex flex-col 
                justify-between transition-transform duration-300 hover:-translate-y-2 will-change-transform">
                    
                    <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-xs px-4 py-1 rounded-full'>
                        Most Popular
                    </span>

                    <div>
                        <h2 className="text-xl md:text-2xl font-bold">Pro</h2>
                        <p className='text-sm md:text-base'>Best for professionals</p>

                        <p className='my-6'>
                            <span className="text-3xl md:text-5xl font-bold">$29</span>
                            <span className='text-sm md:text-lg'> /Month</span>
                        </p>

                        <ul className="space-y-2">
                            <li className='text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-white"></i>All premium tools</li>
                            <li className='text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-white"></i>Unlimited templates</li>
                            <li className='text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-white"></i> Priority support</li>
                            <li className='text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-white"></i>Unlimited projects</li>
                            <li className='text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-white"></i> Cloud sync</li>
                            <li className='text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-white"></i> Advanced analytics</li>
                        </ul>
                    </div>

                    <button className="mt-6 py-3 w-full bg-white text-purple-600 rounded-full font-medium">
                        Start Pro Trial
                    </button>
                </div>

                <div className="bg-[#F9FAFC] p-6 border border-gray-200 rounded-2xl flex flex-col 
                justify-between transition-transform duration-300 hover:-translate-y-2 will-change-transform">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#101727]">Enterprise</h2>
                        <p className='text-[#627382] text-sm md:text-base'>For teams and businesses</p>

                        <p className='my-6'>
                            <span className="text-3xl md:text-5xl font-bold">$99</span>
                            <span className='text-[#627382] text-sm md:text-lg'> /Month</span>
                        </p>

                        <ul className="space-y-2">
                            <li className='text-[#627382] text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-success"></i>Everything in Pro</li>
                            <li className='text-[#627382] text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-success"></i>Team collaboration</li>
                            <li className='text-[#627382] text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-success"></i>Custom integrations</li>
                            <li className='text-[#627382] text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-success"></i>Dedicated support</li>
                            <li className='text-[#627382] text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-success"></i>SLA guarantee</li>
                            <li className='text-[#627382] text-sm md:text-base'><i className="fa-solid fa-check mt-1 me-3 text-success"></i>Custom branding</li>
                        </ul>
                    </div>

                    <button className="mt-6 py-3 w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-medium">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Pricing