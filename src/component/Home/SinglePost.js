import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'
import axios from 'axios';
import ShowComments from './ShowComments';


const SinglePost = () => {
    const PF = "https://futureblinkserver.onrender.com/images/";
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [user,] = useAuthState(auth);

    useEffect(() => {
        const url = `https://futureblinkserver.onrender.com/service/${serviceId}`;
        // console.log("test url", url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])
    var date_time = moment().format("MMM Do YY");
    // function to make comment
    const makeComment = event => {
        event.preventDefault();
        const newPost = {
            userId: serviceId,
            userName: user.displayName,
            email: user.email,
            UserComment: event.target.comment.value,
            commentDate: date_time,

        }
        console.log(newPost);
        axios.post('https://futureblinkserver.onrender.com/comment', newPost)
        .then(response => {
            const { data } = response;
            if (data.insertedId) {
                toast('You Commented Successfully');
                event.target.reset();
            }
        })
    };
    return (
        <div className=' mt-45 mb-45 bg-white mx-auto p-12'>
            <h2 className='text-center text-3xl font-serif  text-black m-12 '>{service.title}</h2>
            <div className='flex justify-center items-center '>
                <div className='flex ml-12 '>
                    <div className='flex justify-evenly  items-center '>
                        <div className='pr-1 '> <img src="https://img.icons8.com/material-outlined/20/737373/user--v1.png" /> </div>
                        <div> <h2 className=' text-blue-600 font-bold text-sm font-serif '>{user.displayName}</h2> </div>
                    </div>
                    <div className='flex justify-evenly items-center ml-12 '>
                        <div className='pr-1'> <img src="https://img.icons8.com/ios/17/737373/menu-rounded.png" /> </div>
                        <div> <h2 className=' text-blue-600 font-bold text-sm font-serif '>{service.email}</h2></div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center mt-2 items-center '>
                <div className='pr-2'><img src="https://img.icons8.com/external-regular-kawalan-studio/17/4D4D4D/external-calendar-date-time-regular-kawalan-studio-8.png" /> </div>
                <div> <h2 className=' text-black-900 font-bold text-sm  '>Published {service?.date}</h2></div>
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
                    <img src="https://img.icons8.com/material-outlined/30/228BE6/whatsapp--v1.png" />
                </div>
                <div class=" w-8 h-8 rounded-md hover:bg-blue-700  border border-black ml-3 text-white">
                    <img src="https://img.icons8.com/ios-glyphs/30/228BE6/secured-letter--v1.png" />
                </div>
            </div>
            <div className='flex justify-center mt-12 '>
                <img src={PF + service.photo} alt="" />
            </div>
            <div className='w-3/4 mx-auto mt-16'>
                <p className='text-black text-left leading-relaxed font-sans text-xl '>
                    {service.desc}
                </p>
            </div>
            
        <div >
            <ShowComments/>
            </div>
        <form   onSubmit={makeComment}>
        <div className='flex justify-center w-full  border-b'>
                <div> 
                 
                <input type="text" name="comment" placeholder='Write a Comment...' className=' w-96 p-5 text-start items-center rounded ' /> 
               
                </div>
            </div>
            <div className='flex  justify-center'>
            <button className='btn '>
                <input type="submit" /> 
            </button>
            </div> 
            </form> 
        </div>
    );
};

export default SinglePost;


 
//                 <input
//                     type="text"
//                     placeholder="Add a comment"
//                     // value={comment}
//                     onChange={(e) => {
//                         // setComment(e.target.value);
//                     }}
//                     className="rounded"
//                 />
//                 <button
//                     className="comment btn"
//                     onClick={() => {
//                         makeComment();
//                     }}
//                 >
//                     Post
//                 </button>