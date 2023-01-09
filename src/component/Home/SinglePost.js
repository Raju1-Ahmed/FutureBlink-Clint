import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    // console.log("test service",service);
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        // console.log("test url", url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])
    return (
        <div className=' mt-45 mb-45 bg-white mx-auto p-12'>
            <h2 className='text-center text-3xl font-serif  text-black m-12 '>{service.name}</h2>
            <div className='flex justify-center items-center '>
                <div className='flex justify-evenly items-center'>
                    <div className='flex justify-evenly pr-12 items-center '>
                        <div className='pr-1 '> <img src="https://img.icons8.com/material-outlined/20/737373/user--v1.png" /> </div>
                        <div> <h2 className=' text-blue-600 font-bold text-sm font-serif '>Sushant Shekhar</h2> </div>
                    </div>
                    <div className='flex justify-evenly items-center pr-3 '>
                        <div className='pr-1'> <img src="https://img.icons8.com/ios/17/737373/menu-rounded.png" /> </div>
                        <div> <h2 className=' text-blue-600 font-bold text-sm font-serif '>Cold Email</h2></div>
                    </div>

                </div>

            </div>
            <div className='flex justify-center mt-2 items-center '>
                <div className='pr-2'><img src="https://img.icons8.com/external-regular-kawalan-studio/17/4D4D4D/external-calendar-date-time-regular-kawalan-studio-8.png" /> </div>
                <div> <h2 className=' text-black-900 font-bold text-sm  '>Published On: January 5, 2023</h2></div>
            </div>
            <div className='flex justify-center items-center mt-6 '>
                <div class=" w-8 h-8 rounded-md hover:bg-blue-700  border border-black ml-3 text-white">
                    <img src="https://img.icons8.com/ios-glyphs/30/228BE6/facebook-f.png" className='p-1' />
                </div>
                <div class=" w-8 h-8 rounded-md hover:bg-blue-700  border border-black ml-3 text-white">
                    <img src="https://img.icons8.com/ios-glyphs/30/228BE6/linkedin.png" />
                </div>
                <div class=" w-8 h-8 rounded-md hover:bg-blue-700  border border-black ml-3 text-white">
                    <img src="https://img.icons8.com/material-outlined/30/228BE6/twitter.png" />
                </div>
                <div class=" w-8 h-8 rounded-md hover:bg-blue-700  border border-black ml-3 text-white">
                <img src="https://img.icons8.com/material-outlined/30/228BE6/whatsapp--v1.png"/>
                </div>
                <div class=" w-8 h-8 rounded-md hover:bg-blue-700  border border-black ml-3 text-white">
                    <img src="https://img.icons8.com/ios-glyphs/30/228BE6/secured-letter--v1.png" />
                </div>
            </div>
            <div className='flex justify-center mt-12 '>
                <img src={service.image} alt="" />
            </div>
            <div className='w-3/4 mx-auto mt-16'>
              <p className='text-black text-left leading-relaxed font-sans text-xl '>
                    {service.about}
                </p>
              </div>
        </div>
    );
};

export default SinglePost;