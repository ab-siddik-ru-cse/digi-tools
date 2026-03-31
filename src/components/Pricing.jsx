import React from 'react'

const Pricing = () => {
    return (
        <div className='py-30'>
            <div className='text-center space-y-5'>
                <h1 className="text-5xl text-[#101727] font-bold">Simple, Transparent Pricing</h1>
                <p className='text-[#627382] text-[16px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-3 max-w-300 mx-auto mt-10 gap-8'>
                <div className="card w-96 bg-[#F9FAFC]">
                    <div className="card-body border-2 border-gray-200 rounded-2xl">
                        <div className="flex justify-between">
                            <h2 className="text-2xl text-[#101727] font-bold">Starter</h2>
                        </div>
                        <p className='text-[#627382] text-[16px]'>Perfect for getting started</p>
                        <p className='my-6'><span className="text-5xl font-bold">$0</span> <span className='text-[#627382] text-lg'>/Month</span></p>
                        <ul className="mt-1 flex flex-col gap-1 text-xs">
                            <li className='text-[#627382] text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li className='text-[#627382] text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Basic templates</span>
                            </li>
                            <li className='text-[#627382] text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Community support</span>
                            </li>
                            <li className='text-[#627382] text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-15">
                            <button className="p-6 btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white btn-block">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#F9FAFC]">
                    <div className="card-body border-2 border-gray-200 rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
                        <span className='bg-[#FEF3C6] text-[#BB4D00] badge absolute -top-5 right-35 p-4 rounded-full'>Most Popular</span>
                        <div className="flex justify-between">
                            <h2 className="text-2xl text-white font-bold">Pro</h2>
                        </div>
                        <p className='text-white text-[16px]'>Best for professionals</p>
                        <p className='my-4'><span className="text-5xl font-bold">$29</span> <span className='text-white text-lg'>/Month</span></p>
                        <ul className="mt-1 flex flex-col gap-1 text-xs">
                            <li className='text-white text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Access to all premium tools</span>
                            </li>
                            <li className='text-white text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Unlimited templates</span>
                            </li>
                            <li className='text-white text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Priority support</span>
                            </li>
                            <li className='text-white text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Unlimited projects</span>
                            </li>
                            <li className='text-white text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Cloud sync</span>
                            </li>
                            <li className='text-white text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-1">
                            <button className="p-6 btn bg-white rounded-full text-purple-500 btn-block">
                                <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Get Started Free</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-[#F9FAFC]">
                    <div className="card-body border-2 border-gray-200 rounded-2xl">
                        <div className="flex justify-between">
                            <h2 className="text-2xl text-[#101727] font-bold">Enterprise</h2>
                        </div>
                        <p className='text-[#627382] text-[16px]'>For teams and businesses</p>
                        <p className='my-6'><span className="text-5xl font-bold">$99</span> <span className='text-[#627382] text-lg'>/Month</span></p>
                        <ul className="mt-1 flex flex-col gap-1 text-xs">
                            <li className='text-[#627382] text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Everything in Pro</span>
                            </li>
                            <li className='text-[#627382] text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Team collaboration</span>
                            </li>
                            <li className='text-[#627382] text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Custom integrations</span>
                            </li>
                            <li className='text-[#627382] text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Dedicated support</span>
                            </li>
                            <li className='text-[#627382] text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>SLA guarantee</span>
                            </li>
                            <li className='text-[#627382] text-[16px]'>
                                <i className="fa-solid fa-check size-4 me-2 inline-block text-success"></i>
                                <span>Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-3">
                            <button className="p-6 btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white btn-block">Get Started Free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
