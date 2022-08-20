import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
const Banner = () => {
    return (
        <div className="hero bg-base-100">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 w-full md:w-4/5 mx-auto container">

                {/* texts */}
                <div className='w-full pr-0 mt-20 text-center md:text-left md:mt-0 md:pr-14'>
                    <h1 className="text-6xl font-bold text-primary">Best services</h1>
                    <h1 className='text-4xl font-bold!'>In the world</h1>
                    <p className="py-6">We provide the best services for making you the best programmer out there. We have professional developers who will teach you every thing about programming. But you have do hard work to become a programmer.</p>
                    <button className="btn btn-primary">Get Started</button>
                    <div className='flex justify-center flex-col items-center mt-5 md:mt-20 w-full'>
                        <FiArrowDownCircle size={60} className="text-primary animate-bounce" />
                        <p className='text-secondary w-full md:w-48 text-center'>Scroll down to see our awesome features</p>
                    </div>
                </div>
                {/* mobile */}
                <div className='mt-10 flex justify-center md:mt-60 p-3 w-full'>
                    <div className="mockup-phone">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard bg-base-100 phone-3 p-5 overflow-y-auto">
                                <div className="tabs pt-10 flex justify-center mb-5">
                                    <span className="tab tab-bordered">Tab 1</span>
                                    <span className="tab tab-bordered tab-active">Tab 2</span>
                                    <span className="tab tab-bordered">Tab 3</span>
                                </div>
                                <img src="https://i.ibb.co/r4fqg6P/teaching.jpg" className='rounded-xl border border-base-200' alt="" />
                                <h1 className='text-xl font-bold'>Title: Learn Programming online!</h1>
                                <div className='mt-10'>
                                    <h1 className='mb-5 text-center underline font-bold text-lg'>Live Cat Room</h1>
                                    <input type="text" placeholder="Ask your question" className="input input-bordered input-primary w-full" />
                                </div>
                                <div className='px-10 mt-5'>
                                    <progress className="progress progress-primary w-100" value="0" max="100"></progress>
                                    <progress className="progress progress-primary w-100" value="10" max="100"></progress>
                                    <progress className="progress progress-primary w-100" value="40" max="100"></progress>
                                    <progress className="progress progress-primary w-100" value="70" max="100"></progress>
                                    <progress className="progress progress-primary w-100" value="100" max="100"></progress>
                                </div>
                                <hr className='my-5' />
                                <img src="https://i.ibb.co/r4fqg6P/teaching.jpg" className='rounded-xl border border-base-200' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;