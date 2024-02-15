import React from 'react';

const ProfileCard = () => {
    return (
        <>
            <div className="py-1">
                <div className="border-l-4">
                    <div className="grid grid-cols-2 gap-1 p-4 border-b-2">
                        {/* Left side */}
                        <div className="grid grid-cols-5    ">
                            <div className="">
                                <div className="relative w-28 h-28">
                                    {/* Profile Image */}
                                    <img
                                        className="w-28 h-28 rounded-full"
                                        src="https://source.unsplash.com/600x300/?student"
                                        alt="Profile"
                                    />
                                    {/* Online/Offline Dot */}
                                    <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                                    <p className="text-md font-semibold text-gray-500 mb-0">2.5k/day</p>

                                </div>

                            </div>
                            <div className="col-span-3 mx-2  my-auto">
                                <h6 className="text-xl font-semibold text-gray-700 mb-1">M Muaz Shahzad</h6>
                                <p className="text-lg text-gray-900 mb-1">
                                    Fashion | Beauty | Travel
                                </p>
                                <p className="text-md text-gray-500 mb-0">Karachi</p>
                            </div>

                        </div>
                        {/* Right side */}
                        <div className="flex justify-end my-auto">
                            <div className="">
                                <button className="bg-blue-800 mx-3 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-full"
                                >
                                    View Profile
                                </button>
                                <button className="bg-green-700 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-full"
                                >
                                    Send Offer
                                </button>
                            </div>
                        </div>
                    </div>




                </div>
            </div>





        </>

    );
};

export default ProfileCard;
