import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";

const BrandSection1 = () => {
  const [showSecondSection, setShowSecondSection] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSecondSection(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className='brand-title  border-t-[1px]'>
    <div className='container pt-4'>
      <div className={!showSecondSection ? '' : 'hidden'}>
        <h1 className='text-3xl'>Welcome To <span> Tech Solution </span> Sport Hub!</h1>
        <p className='text-xl w-75'>Get ready to elevate your game and inspire greatness with  Tech Solution , explore our dynamic platform designed to connect you with  top-tier athletets , Influencer, and sports enthusiasts worldwide.
          whether you are seeking to sponsor athletets , promote your latest  sports gear, or engage with your audience
          in exciting new ways, Tech Solution has you covered.
          <br />
          <p className='mt-4'> Lets score big together. </p>
        </p>
      </div>
      
      <div className={!showSecondSection ? 'hidden' : ''}>
        <div className='flex justify-between'>
          <h1 className='text-lg md:text-3xl'>
            Your workspace
          </h1>
          <button data-aos="fade-up" className="bg-buttoncolor hover:bg-buttonhovercolor text-white font-bold py-2 px-3 lg:px-4 rounded-full aos-init aos-animate flex items-center"> <FaPlus className='pr-2 text-white text-lg lg:text-2xl' /> Get Started</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default BrandSection1;
