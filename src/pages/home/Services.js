import React from 'react';

const Services = () => {
    const services = [
        { _id: 1, name: 'Web Design', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.', image: 'https://i.ibb.co/PmFp355/web-design-1.jpg' },
        { _id: 2, name: 'Font-End', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.', image: 'https://i.ibb.co/DD1NDLx/back-end.jpg' },
        { _id: 3, name: 'Back-End', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.', image: 'https://i.ibb.co/Gk8cjJ9/font-end.png' },
    ];
    return (
        <div className='py-10' style={{ backgroundImage: "url(https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=2000)" }}>
            <div className='bg-base-200 p-10 rounded-3xl container mx-auto mt-5 md:-mt-48'>
                <h1 className='text-5xl text-center md:text-left font-bold text-primary mb-16'>Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto'>
                    {
                        services.map(service => (
                            <div className='shadow-lg rounded-lg overflow-hidden bg-primary text-base-100 hover:animate-pulse'>
                                <img src={service.image} alt="" className='w-full h-64 object-cover' />
                                <div className='p-5'>
                                    <h1 className='text-2xl font-bold mb-3'>{service.name}</h1>
                                    <p className='opacity-80'>{service.description}</p>
                                    <button className="btn btn-secondary mt-3">Enroll Now</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;;;