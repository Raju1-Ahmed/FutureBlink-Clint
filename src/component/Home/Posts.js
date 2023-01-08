import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <div className='mt-48 mb-48 d-flex justify-center items-center' >
        <div class="grid grid-cols-3 gap-5">
        {
                    posts.map(post => <Post
                        key={post._id}
                        post={post}
                    ></Post>)
                }
        </div>
    </div>
    );
};

export default Posts;