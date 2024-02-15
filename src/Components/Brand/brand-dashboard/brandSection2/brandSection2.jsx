import React, { useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FaBoxTissue } from "react-icons/fa6";
import ProfilePic from "../../../../assets/Images/Primary/images.jfif"
import { FaStar } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { BiVideo } from "react-icons/bi";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const cardData = [
    {
        id: 0,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 4.66,
        price: "$12.00/hr"
    },
    {
        id: 1,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 2.66,
        price: "$10.00/hr"
    },
    {
        id: 2,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 5,
        price: "$5.00/hr"
    },
    {
        id: 3,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 3.66,
        price: "$45.00/hr"
    },
    {
        id: 4,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 4.6,
        price: "$135.00/hr"
    },
    {
        id: 5,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 4.66,
        price: "$25.00/hr"
    },
    {
        id: 6,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 4.66,
        price: "$25.00/hr"
    },
    {
        id: 7,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 4.66,
        price: "$25.00/hr"
    },
    {
        id: 8,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 4.66,
        price: "$25.00/hr"
    },
    {
        id: 9,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 4.66,
        price: "$25.00/hr"
    },
    {
        id: 10,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 4.66,
        price: "$25.00/hr"
    },
];

const BrandSection2 = () => {
    const [showGuidedTour, setShowGuidedTour] = useState(true);
    const [swiper, setSwiper] = useState(null);

    const handleNextButtonClick = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    return (
        <div className='container py-10'>
            <div className="flex items-center">
                <h4>Discover Influencer</h4>
                <a href='#'>
                    <BsArrowRight className='ml-8 text-3xl' />
                </a>
            </div>
            <div className="flex items-center">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    breakpoints={{
                        220: {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                            
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 25
                        }
                    }}
                    loop={false}
                    // navigation
                    // pagination={{ clickable: true }}
                    allowTouchMove={true}
                    onSwiper={setSwiper}
                    // onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    {showGuidedTour && (
                        <SwiperSlide>
                            <div className="singleCrd singlecard-bg flex flex-col justify-between min-h-[400px] rounded-xl p-6 bg-[#0055a2]">
                                <div className="">
                                    <div className="card-header text-white flex justify-between items-start">
                                        <h5 className='font-[400]'>Guided tour</h5>
                                        <button onClick={() => setShowGuidedTour(false)}>
                                            <IoClose className='text-2xl' />
                                        </button>
                                    </div>
                                    <div className="cardBody h-100 text-white pt-4 ">
                                        <h4>Check Out top rated talent for your open job posts</h4>
                                    </div>
                                </div>
                                <div className="text-white boxIcon flex justify-end">
                                    <FaBoxTissue className='text-7xl' />
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                    {cardData.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="singleCrd flex flex-col justify-between min-h-[400px] rounded-xl p-6 border-1 shadow-md bg-white">
                                <div className="">
                                    <div className="card-header flex justify-between">
                                        <div className="profileTitle flex">
                                            <div className='w-[50px] h-[50px]'>
                                                <img className='w-100 h-auto rounded-full' src={card.profilePic} alt="profile pic" />
                                            </div>
                                            <div className='px-3'>
                                                <p className='clientName mb-0 font-bold text-lg'>{card.name}</p>
                                                <p className='clientLocation mb-0 font-[600]'>{card.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardBody pt-3">
                                        <h6 className='title text-md'>{card.title}</h6>
                                        <div className="priceRating flex justify-between items-center py-2">
                                            <div className="price flex items-center text-md font-[600] text-[#8a8e87]">
                                                <p className='mb-0 mr-2'>PKR</p>
                                                <p className='mb-0'>{card.price}</p>
                                            </div>
                                            <div className="rating flex items-center text-md font-[600] text-[#8a8e87]">
                                                <FaStar className='text-[#e7c000]'/>
                                                <p className='mb-0 ml-2'>{card.rating}</p>
                                            </div>
                                        </div>
                                        <div className="cardTags pt-2 flex flex-wrap gap-2">
                                            {card.tags.slice(0, 4).map((tag, index) => (
                                                <div key={index} className="SingleTag rounded-md bg-[#e3e3e3] text-[#8a8e87] w-fit px-2 ">
                                                    <p className='mb-0 text-black'>{tag}</p>
                                                </div>
                                            ))}
                                            {card.tags.length > 4 && (
                                                <div className="SingleTag rounded-md bg-[#e3e3e3] text-[#8a8e87] w-fit px-2 ">
                                                    <p className='mb-0 text-black'>+{card.tags.length - 4}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button className='border-2 border-[#0057a2] hover:bg-[#0057a2] hover:text-white transition-all duration-500 ease-in-out text-[#0057a2] w-full py-2 rounded-full font-bold'>
                                    View Profile
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="hidden md:block nextButton rounded-full ml-4 p-[6px] h-[32px] w-[32px] border-2 border-[#0057a2]" onClick={handleNextButtonClick}>
                <FiArrowRight className='text-[#0057a2]'/>
                </button>
            </div>
        </div>
    )
}

export default BrandSection2;
