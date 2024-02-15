import React from 'react'
import BranNavbar from './navbar/branNavbar';
import BrandSection1 from './brandSection1/brandSection1';
import BrandSection2 from './brandSection2/brandSection2';
import BrandSection3 from './brandSection3/brandSection3';
import BrandSection4 from './brandSection4/brandSection4';
import BrandFooter from './brandFooter/brandFooter';

const BrandDashboard = () => {

  return (
    <>
        <BranNavbar />
        <BrandSection1 />
        <BrandSection2 />
        <BrandSection3 />
        <BrandSection4 />
        <BrandFooter/>
    </>
  )
}

export default BrandDashboard;