import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";

const cardData = [
    {
        id: 1,
        title: 'Frontend development with React Expertise Needed for Existing',
        proposals: 20,
        status: 'Hiring',
        buttonText: 'Review Proposals',
        threeDotsButton: <HiDotsHorizontal className='text-[#0055a2]' />
    },
    {
        id: 2,
        icon: <GoLightBulb className='text-lg font-[500] mr-2' />,
        largTitle: 'Pay with confidence',
        tipTitle: 'Quick Tip',
        tipContent: 'Talent looks for clients with verified billing methods. There’s no cost until you hire; you’ll only be charged once you approve completed work.',
        linkText: 'Learn more about payments',
    },
    {
        id: 3,
        icon: <GoLightBulb className='text-lg font-[500] mr-2' />,
        largTitle: 'Stay safe on Upwork',
        tipTitle: 'Quick Tip',
        tipContent: 'We’re doing our best to keep you safe, and it’s important you learn how to identify and report suspicious activity.',
        linkText: 'Learn more about payments',
    },
];

const BrandSection4 = () => {
    const [cards, setCards] = useState(cardData);

    const handleClose = (id) => {
        const updatedCards = cards.filter(card => card.id !== id);
        setCards(updatedCards);
    };

    return (
        <div className='container pb-10'>
            <h4 className='flex flex-col md:flex-row items-center '>
                <span className='mr-6'>Your Jobs</span>
                {/* <div className=''>
        <a href="#" className='no-underline mr-3 text-lg text-[#5e6d55] hover:underline'>All job posts</a>
        <a href="#" className='no-underline mr-3 border-l-[2px] pl-3 text-lg text-[#5e6d55] hover:underline'>All job posts</a>
        </div> */}
            </h4>
            <div className="card-main flex flex-wrap gap-6 pt-2">
                {cards.map((card) => (
                    <div key={card.id} className={`singleCrd singlecard-bg w-[100%] lg:w-[23%] border-[#5e6d55] border-[1px] flex flex-col justify-between min-h-[350px] rounded-xl p-6 bg-white`}>
                        <div>
                            {card.title && (
                                <div className="card-header text-black flex justify-between items-start">
                                    <div className="flex items-center">
                                        <p>{card.title}</p>
                                    </div>
                                </div>
                            )}
                            {card.proposals !== undefined && (
                                <div className="cardBody h-100 text-black pt-4 ">
                                    <h5>You have {card.proposals} new proposals</h5>
                                    <div className="flex justify-end">
                                        <div className='bg-[#0055a2] w-fit text-white rounded-md px-3 text-lg'>{card.status}</div>
                                    </div>
                                </div>
                            )}
                            {card.icon && (
                                <div className="card-header text-black flex justify-between items-start">
                                    <div className="flex items-center">
                                        {card.icon}
                                        <h5 className='font-[500] text-base mb-0'>{card.tipTitle}</h5>
                                    </div>
                                    <button onClick={() => handleClose(card.id)}>
                                        <IoClose className='text-2xl' />
                                    </button>
                                </div>
                            )}
                            {card.tipContent && (
                                <div className="cardBody h-100 text-black pt-4 ">
                                    <h4>{card.title}</h4>
                                    <h4>{card.largTitle}</h4>
                                    <p className='text-[#5e6d55]'>{card.tipContent}</p>
                                </div>
                            )}
                        </div>
                        <div className="text-black boxIcon">
                            {card.buttonText && (
                                <div className='flex items-center justify-between'>
                                    <a href='#' className='font-[500] bg-[#0055a2] rounded-full py-2 px-4 text-white no-underline'>
                                        {card.buttonText}
                                    </a>
                                    {/* <button className='h-8 w-8 rounded-full border-2 flex items-center justify-center'>
                    {card.threeDotsButton}
                  </button> */}
                                </div>
                            )}
                            {card.linkText && (
                                <a href='#' className='font-[500] text-[#5e6d55] no-underline hover:underline'>
                                    {card.linkText}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandSection4;
