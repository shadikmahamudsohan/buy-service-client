import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Testimonial = () => {
    const allData = [
        {
            id: 1,
            name: 'John smith',
            description: 'The corse was very help full. I highly recommend you to enroll in them.',
            image: 'https://i.ibb.co/7XZ5Z5r/1.jpg'
        },
        {
            id: 2,
            name: 'John Doe',
            description: 'They explained the topics very well in those video. I am now a full time web developer.',
            image: 'https://i.ibb.co/7XZ5Z5r/1.jpg'
        },
        {
            id: 3,
            name: 'John Doe',
            description: 'This changed my life. I enrolled all the corses and now I am a full time web developer.',
            image: 'https://i.ibb.co/7XZ5Z5r/1.jpg'
        },
        {
            id: 4,
            name: 'John Doe',
            description: 'The teachers are so skilled and talented. I have understand all the courses.',
            image: 'https://i.ibb.co/7XZ5Z5r/1.jpg'
        },
        {
            id: 5,
            name: 'John Doe',
            description: 'Love this website very much. Got all the courses at a very affordable price.',
            image: 'https://i.ibb.co/7XZ5Z5r/1.jpg'
        },
        {
            id: 6,
            name: 'John Doe',
            description: 'I have learned a lot from this website. I am now a full time web developer.',
            image: 'https://i.ibb.co/7XZ5Z5r/1.jpg'
        },
    ];
    return (
        <div style={{ backgroundImage: "url(https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=2000)" }}>
            <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
                <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
                    <h1 className="text-5xl font-bold text-primary text-center">
                        Customers opinions
                    </h1>
                    <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-nature">What our customers are saying</h1>
                    <Slider>
                        <Slide index={0} tabIndex="null">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                                {
                                    allData.slice(0, 3).map(data => (
                                        <div className="flex items-center flex-col justify-center bg-base-200 py-10 rounded-xl mt-10 text-center max-w-sm shadow-lg my-10">
                                            <div class="avatar">
                                                <div class="w-24 rounded-full shadow border-base-100">
                                                    <img src="https://placeimg.com/192/192/people" alt="" />
                                                </div>
                                            </div>

                                            <div className="">
                                                <h1 className="text-2xl font-bold my-5 text-nature">{data.name}</h1>
                                                <p className="opacity-80 w-full md:w-2/3 mx-auto">{data.description}</p>
                                            </div>

                                            <div class="rating mt-5">
                                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </Slide>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                allData.slice(3, 6).map(data => (
                                    <div className="flex items-center flex-col justify-center bg-base-200 py-10 rounded-xl mt-10 text-center max-w-sm shadow-lg my-10">
                                        <div class="avatar">
                                            <div class="w-24 rounded-full shadow border-base-100">
                                                <img src="https://placeimg.com/192/192/people" alt="" />
                                            </div>
                                        </div>

                                        <div className="">
                                            <h1 className="text-2xl font-bold my-5 text-nature">{data.name}</h1>
                                            <p className="opacity-80 w-full md:w-2/3 mx-auto">{data.description}</p>
                                        </div>

                                        <div class="rating mt-5">
                                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </Slider>
                    <div className="flex w-full justify-center items-center mt-8">
                        <ButtonBack className="btn btn-primary mx-3 " role="button" aria-label="previous slide">
                            <AiOutlineArrowLeft />
                        </ButtonBack>

                        <ButtonNext role="button" aria-label="next slide" className="btn btn-primary mx-3">
                            <AiOutlineArrowRight />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
};

export default Testimonial;