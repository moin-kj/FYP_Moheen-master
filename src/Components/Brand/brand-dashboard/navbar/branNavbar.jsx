import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './brandNavbarStyle.css'
import WebIcon from '@mui/icons-material/Web';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import { IoIosPaper } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { MdBrandingWatermark } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FaQuestion } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlSettings } from "react-icons/sl";
import { TbLogout2 } from "react-icons/tb";




const BranNavbar = () => {
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const NotificationData = [
    {
      id: 0,
      notificationTitle: "A recent sign-in to your Upwork account( 7dbb93e0) from an unkown device or browser. 9:22pm",
    },
    {
      id: 1,
      notificationTitle: "A recent sign-in to your Upwork account( 7dbb93e0) from an unkown device or browser. 9:22pm",
    },
    {
      id: 3,
      notificationTitle: "A recent sign-in to your Upwork account( 7dbb93e0) from an unkown device or browser. 9:22pm",
    },
  ]
  const Explore_Dropdown = [
    {
      id: 0,
      icon: <WebIcon className='text-[#008BFF] navicons' />,
      head: "Post a job",
      name: "postJob"
    },
    {
      id: 1,
      icon: <HandshakeOutlinedIcon className='navicons text-[#EC6E47]' />,
      head: "All Jobs",
      name: "allJobs"
    },
    {
      id: 2,
      icon: <HandshakeOutlinedIcon className='navicons text-[#EC6E47]' />,
      head: "All contracts",
      name: "allContracts"
    },
    {
      id: 3,
      icon: <HandshakeOutlinedIcon className='navicons text-[#EC6E47]' />,
      head: "All offers",
      name: "allOffers"
    },
    {
      id: 3,
      icon: <HandshakeOutlinedIcon className='navicons text-[#EC6E47]' />,
      head: "Collaborations",
      name: "collaborations"
    },

  ];

  return (
    <Navbar collapseOnSelect expand="lg" className='px-5'>
      <Navbar.Brand >
        <Link to="/" className='text-black no-underline '>Your Logo</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto p-1 font-titleFont gap-4">
          <NavDropdown
            title={
              <div className="flex items-center">
                Jobs <span className="ml-1 mt-1">{exploreDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
              </div>
            }
            id="collasible-nav-dropdown"
            onMouseEnter={() => {
              setExploreDropdownOpen(true)
            }}
            show={exploreDropdownOpen}
          >
            <Container fluid className="eventsNav bg-[aliceblue] border-black border-b-[1px] px-5"
              onMouseLeave={() => setExploreDropdownOpen(false)}>
              <Row >
                {
                  Explore_Dropdown.map((val, index) => {
                    return <Col md="4" lg="3" className="text-left pt-4" key={index}>
                      <Dropdown.Item>
                        <Link to={'/' + val.name} className='text-black font-thin no-underline flex items-center'>
                          <div>
                            {val.icon}
                          </div>
                          <div>
                            <h6 className="font-sans mt-2">
                              {val.head}
                            </h6>
                          </div>
                        </Link>
                      </Dropdown.Item>
                    </Col>
                  })
                }
              </Row>
            </Container>
          </NavDropdown>
          <Link to="#" className='text-black no-underline '>
            <Nav.Link href='#'> Find Influencer </Nav.Link>
          </Link>
          <Link to="#" className='text-black no-underline '>
            <Nav.Link href='#'>Analytics</Nav.Link>
          </Link>
          <Link to="#" className='text-black no-underline '>
            <Nav.Link href='#'>Messages</Nav.Link>
          </Link>
        </Nav>
        <Nav className="p-1  font-titleFont gap-3">
          <Link to="#" className='text-black no-underline '>
            <Nav.Link href='#' className='p-0'>
              <div className='help-btn text-3xl cursor-pointer'>
                <FaQuestion />
              </div>
            </Nav.Link>
          </Link>
          <div className='brand-notifications flex items-center text-4xl relative'>
            <IoMdNotificationsOutline className='cursor-pointer' onClick={() => setNotificationToggle(!notificationToggle)} />
            <div className='notificarion-dot bg-[red] rounded-full p-[5px] absolute right-[5px] top-[4px]'></div>
            {notificationToggle && (
              <div className="notification-box absolute w-[350px] h-100 bottom-0 -right-6 top-[44px] z-[99999]">
                <div class="notification-triangle "></div>
                <div className="rounded-xl shadow-lg bg-white">
                  {NotificationData.map((val, index) => (
                    <div key={val.id} className="single-noti flex items-start border-b-2 p-6">
                      <button className='text-3xl mr-4'>
                        <FaRegUserCircle />
                      </button>
                      <span className='text-base' style={{ fontWeight: index === 0 ? 500 : 400 }}>{val.notificationTitle}</span>
                    </div>
                  ))}

                  <a href="#" className='no-underline'>
                    <p className='px-6 py-3 text-black text-base'>
                      See All Notification
                    </p>
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className='flex items-center text-3xl  relative'>
            <CgProfile className='cursor-pointer' onClick={() => setProfileToggle(!profileToggle)}/>
            {profileToggle && (
              <div className="notification-box absolute w-[300px] h-100 bottom-0 -right-6 top-[44px] z-[99999]">
                <div class="notification-triangle "></div>
                <div className="rounded-xl shadow-lg bg-white p-6">
                  <div className="userProfilepic flex justify-center">
                  <FaRegCircleUser className='text-6xl'/>
                  </div>
                  <p className='text-lg text-center pt-2 mb-0'>Brand Name</p>
                  <p className='onlineTag text-center text-[14px]'>Online</p>
                 
                  <div className="sittingSec ">
                  <a href="#" className='no-underline mb-2 flex items-center text-black'>
                    <SlSettings className='text-[20px]'/>
                    <p className='mb-0 pl-6 text-[18px] no-underline'>Setting</p>
                    </a>
                  </div>
                 
                 
                  <div className="sittingSec ">
                  <a href="#" className='no-underline flex items-center text-black'>
                    <TbLogout2 className='text-[20px]'/>

                    <p className='mb-0 pl-6 text-[18px] no-underline'>Log out</p>
                    </a>
                  </div>
                  
                </div>
              </div>
            )}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BranNavbar;
