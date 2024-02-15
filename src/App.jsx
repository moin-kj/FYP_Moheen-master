import { useState, useEffect } from 'react'
import LandingPage from './Components/Landing/LandingPage'
import Preloader from './Components/Preloader/Preloader';
import './App.css'
import Categories from './Components/Categories/Categories';
import { BrowserRouter as Router } from 'react-router-dom';
import InfProfileCreation from './Components/Influencer/InfluencerProfile/InflProfile_Creation';
import Test from './Components/Influencer/Test/Test';
import BrandProfileCreate from './Components/Brand/BrandProfile/BrandProfile_Creation';
import Jobpost from './Components/Brand/JobPost/Jobpost';
import CreateTaskMultiStepFormContainer from './Components/Brand/Test/CreateTaskMultiStepForm';
import Review from './Components/Brand/ReviewProposal/Review';
import BrandDashboard from './Components/Brand/brand-dashboard/brandDashboard';


function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simulate an asynchronous operation or any app setup logic
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <>
      {/* {isLoading ? <Preloader /> : <LandingPage />} */}
      {/* <Jobpost/> */}
      {/* <Review/> */}
      {/* <CreateTaskMultiStepFormContainer/> */}

      {/* <InfProfileCreation/> */}
      {/* <BrandProfileCreate/> */}
      <BrandDashboard/>
    </>
  )





}

export default App


{/* Color Codes */ }
{/* // #e8f5fc  #253778  #008bff  #172B4D*/ }
{
  /* --black: black;
    --burntsienna: #ec6e47;
    --dodger-blue: #008bff;
    --light-grey: #f4f4f4;
    --white: white;
    --alice-blue: #e8f5fc;
    --dark-slate-blue: #253778; 
  */
}