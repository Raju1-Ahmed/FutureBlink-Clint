import React, { useEffect, useState } from 'react';
import UsersComments from './UsersComments';

const ShowComments = () => {
    const [comments, setComments] = useState([]);
    console.log("comments",comments);
    useEffect(() => {
        fetch('http://localhost:5000/usersComment')
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);
    return (
        <div className="flex  w-5/6 mx-auto  border-t ">
            <h3 className='text-center border w-24 h-14'>Comments:{comments.length}</h3>
             {
                    comments.map(comment => <UsersComments
                        key={comment.id}
                        props={comment}
                    ></UsersComments>)
                }
            
        </div> 
    );
};

export default ShowComments;