import React from 'react'
import Constant from '../Constant/Constant'
import DataContext from '../Constant/DataContext';
import img1 from '../../../assets/Images/Primary/img1.jpg'
import img2 from '../../../assets/Images/Primary/img2.jpg'






const Social = () => {



    const image_data = [
        {
            id: 0,
            img: img2

        },
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2

        },
        {
            id: 3,
            img: img1
        },
        {
            id: 4,
            img: img2

        },
        {
            id: 5,
            img: img1
        },
        {
            id: 6,
            img: img2

        },
        {
            id: 7,
            img: img1
        },

    ]



    return (
        <>
           <DataContext.Provider value={image_data}>
                <Constant
                    head="We are here for you"
                    main_head="Amplify Your Brand's Purpose"
                    desc="Collaborate with influencers passionate about social causes. Align your brand with impactful initiatives, creating a positive change and resonating with socially conscious consumers."
                />

            </DataContext.Provider>


        </>
    )
}

export default Social