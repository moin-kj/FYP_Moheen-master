import React from 'react';
import "../brandDashboard.css";
import { TbShieldDollar } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

const stepsData = [
  {
    title: 'Required to Collaborate',
    description: 'Emial Methode. There is no hire',
    icon: <FaCheck className='text-[#0057a2] group-hover:text-white'/>,
    iconColor: '#0057a2',
    altIcon: <TbShieldDollar className='text-4xl group-hover:text-white text-slate-500'/>,
  },
  {
    title: 'Required to Collaborate',
    description: 'Your verified your email address.',
    icon: <FaCheck className='text-[#0057a2] group-hover:text-white '/>,
    iconColor: '#0057a2',
    altIcon: <MdMarkEmailRead className='text-4xl group-hover:text-white text-slate-500'/>,
  },
];

const BrandSection3 = () => {
  return (
    <div className='container pt-4 pb-10'>
        <h5>Complete These Steps to stand out and hire fast</h5>
        <div className="stepsCrad-main pt-2 flex flex-wrap gap-6">
          {stepsData.map((step, index) => (
            <div key={index} className="singlStepCard md:w-[48%] xl:w-[30%] cursor-pointer shodow-lg rounded-2xl p-6 group hover:bg-[#0057a2] bg-[#ffff] hover:text-white transition-all duration-500 ease-in-out">
              <p className='mb-0 pl-[30px]'>{step.title}</p>
              <div className="flex justify-between items-center pt-2">
                <div className='flex items-center'>
                  <div className='rounded-full group-hover:border-white text-[12px] flex justify-center items-center h-[20px] w-[21px] border-[2px] border-[#0057a2]' >
                    {step.icon}
                  </div>
                  <p className='mb-0 text-[18px] font-[600] pl-2'>{step.description}</p>
                </div>
                {step.altIcon}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default BrandSection3;
