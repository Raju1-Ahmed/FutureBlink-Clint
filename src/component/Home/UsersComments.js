import React from 'react';
const UsersComments = ({ props }) => {
    console.log(props);
    const { _id, userName, comment, date } = props;
    return (
        <div className=" p-5">
            <div className='flex mb-5 border-b justify-center'>
                <h2 className=' text-start text-xl font-serif text-blue-400 font-bold'>{userName}</h2>
                <p className='p-1 ml-8'>{date}</p>
            </div>
            <p className='ml-12 font-serif'>{comment}</p>
        </div>
    );
};

export default UsersComments;