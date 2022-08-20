import React from 'react';

const Pricing = () => {
    const data = [
        {
            title: 'Basic',
            price: '$9',
            description: 'You will get all the basic courses for starting as a beginner developer.',
            features: [
                'Get all the basic videos.',
                'Get all the descriptions.',
                'Ask question in public chat.',
                'Get beginner certificate.'
            ]
        },
        {
            title: 'Standard',
            price: '$19',
            popular: true,
            description: 'You will get all the standard courses for starting as a intermediate developer.',
            features: [
                'Get all the standard videos.',
                'Get all the descriptions.',
                'Ask question in private chat.',
                'Get standard certificate.'
            ]
        },
        {
            title: 'Premium',
            price: '$29',
            description: ' You will get all the premium courses for starting as a advanced developer.',
            features: [
                'Get all the premium videos.',
                'Get all the descriptions.',
                'Ask question in private chat.',
                'Get premium certificate.'
            ]
        },
    ];
    return (
        <div>
            <div className="container px-6 py-16 mx-auto">
                <h2 className="text-4xl font-bold mb-5 text-center text-primary">Pricing List</h2>
                <div className="flex flex-wrap mt-8 -mx-4">
                    {data.map((item, index) => (
                        <div key={index} className="w-full px-4 sm:w-1/2 lg:w-1/3">
                            <div className="flex flex-col h-full p-6 bg-base-100 rounded-lg shadow-lg">
                                <div className="flex-1">
                                    <h4 className="mb-4 text-xl font-semibold">{item.title}</h4>
                                    <div className="flex items-center mb-4">
                                        <span className="text-4xl font-semibold">{item.price}</span>
                                        <span className="ml-1 text-lg font-medium">/mo</span>
                                        {item.popular && (
                                            <span className="px-2 py-1 ml-2 text-xs font-semibold text-base-100 uppercase bg-primary rounded-full">Popular</span>
                                        )}
                                    </div>
                                    <p className="mb-4">{item.description}</p>
                                    <ul className="mb-8 space-y-2">
                                        {item.features.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4.293 14.707a1 1 0 010-1.414L9.586 8 4.293 2.707a1 1 0 111.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <button className='btn btn-primary w-full'>Get Started</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;;;;;;