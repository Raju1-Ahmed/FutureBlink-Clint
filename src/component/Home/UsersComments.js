import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useParams } from 'react-router-dom';
const UsersComments = ({ props }) => {
    console.log({props});
    const { serviceId } = useParams();
    console.log('ParamsUse',serviceId);
    const { userId, userName, UserComment, commentDate } = props;

    let  uploadId = userId;
    let  mainId = serviceId;
    // if(!uploadId === mainId){
    //     return value;
    // }

    const issID = uploadId  +'.Break.'+ mainId;
    console.log('userId',issID );



    return (
      <div>
                    <div className="mb-12">
                    <div className='flex mb-5 border-b justify-start'>
                     
                     <h2 className=' text-start text-xl font-serif text-blue-400 font-bold'>{userName} </h2> 
                        
                        <p className='p-1 ml-8'>{commentDate}</p>
                    </div>
                    <p className='ml-12 font-serif'>{UserComment}</p>
                </div>
      </div>
    );
};

export default UsersComments;