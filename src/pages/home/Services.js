import React from 'react';

const Services = () => {
    const services = [
        { _id: 1, name: 'Web Design', description: 'You will learn how to make professional web design and become a web designer', image: 'https://i.ibb.co/PmFp355/web-design-1.jpg' },
        { _id: 2, name: 'Font-End', description: 'You will learn how to make professional font-end website and become a font-end web developer', image: 'https://i.ibb.co/Gk8cjJ9/font-end.png' },
        { _id: 3, name: 'Back-End', description: 'You will learn how to make simple back-end servers and become a back-end web developer', image: 'https://i.ibb.co/DD1NDLx/back-end.jpg' },
        { _id: 4, name: 'Advance Back-End', description: 'You will learn every font-end and back-end languages and become a full-stack web developer', image: 'https://i.ibb.co/HB3MSFd/Full-Stack.png' },
    ];
    return (
        <div className='py-16'>
            <div className='p-5 md:p-10 rounded-3xl container mx-auto mt-5 md:-mt-44' >
                <h1 className='text-4xl text-center md:text-left font-bold text-primary mb-16'>Our Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto'>
                    {
                        services.map(service => (
                            <div key={service._id} className='shadow-lg rounded-lg overflow-hidden bg-base-100 hover:bg-base-200 transition-all'>
                                <div className='md:h-80 overflow-hidden'>
                                    <img src={service.image} alt="" className='w-full hover:scale-[1.5] transition-all object-cover' />
                                </div>
                                <div className='p-5'>
                                    <h1 className='text-2xl font-bold mb-3'>{service.name}</h1>
                                    <p className='opacity-80'>{service.description}</p>
                                </div>
                                <button className="btn btn-primary w-full rounded-none btn-lg">Enroll Now</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;;;