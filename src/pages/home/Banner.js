import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
const Banner = () => {
    return (
        <div class="hero" style={{ backgroundImage: "url(https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=2000)" }}>
            <div class="hero-content grid grid-cols-1 md:grid-cols-2 w-full md:w-2/3 mx-auto container">

                {/* texts */}
                <div className='w-full pr-0 mt-20 text-center md:text-left md:mt-0 md:pr-14'>
                    <h1 class="text-6xl font-bold text-primary">Best services</h1>
                    <h1 className='text-4xl font-bold!'>In the world</h1>
                    <p class="py-6">We provide the best services that you won't found anywhere in the world. We have premium quality services.</p>
                    <button class="btn btn-primary">Get Started</button>
                    <div className='flex justify-center flex-col items-center mt-5 md:mt-20 w-full'>
                        <FiArrowDownCircle size={60} className="text-primary animate-bounce" />
                        <p className='text-secondary w-full md:w-48 text-center'>Scroll down to see our awesome features</p>
                    </div>
                </div>
                {/* mobile */}
                <div className='mt-10 flex justify-center md:mt-60 p-3 w-full'>
                    <div class="mockup-phone">
                        <div class="camera"></div>
                        <div class="display">
                            <div class="artboard bg-base-100 phone-2 p-5 overflow-y-auto">
                                <div class="tabs pt-10 flex justify-center mb-5">
                                    <span class="tab tab-bordered">Tab 1</span>
                                    <span class="tab tab-bordered tab-active">Tab 2</span>
                                    <span class="tab tab-bordered">Tab 3</span>
                                </div>
                                <img src="https://i.ibb.co/r4fqg6P/teaching.jpg" className='rounded-xl border border-base-200' alt="" />
                                <h1 className='text-xl font-bold'>Title: Learn Programming online!</h1>
                                <div className='mt-10'>
                                    <h1 className='mb-5 text-center underline font-bold text-lg'>Live Cat Room</h1>
                                    <input type="text" placeholder="Ask your question" class="input input-bordered input-primary w-full" />
                                </div>
                                <div className='px-10 mt-5'>
                                    <progress class="progress progress-primary w-100" value="0" max="100"></progress>
                                    <progress class="progress progress-primary w-100" value="10" max="100"></progress>
                                    <progress class="progress progress-primary w-100" value="40" max="100"></progress>
                                    <progress class="progress progress-primary w-100" value="70" max="100"></progress>
                                    <progress class="progress progress-primary w-100" value="100" max="100"></progress>
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