import React from 'react';
import { Link } from 'react-router-dom';
import AddPost from './AddPost';
import Posts from './Posts';

const Home = () => {
    return (
        <div>
            <Link to='/addpost'>
                <div className='p-2 mt-5 w-96 bg-blue-900 shadow-xl h-auto mx-auto justify-end items-center  border border-white rounded-md '>
                    <div className='flex justify-evenly items-center'>
                        <h1 className='w-24 text-xl '>Write Here Your Blog..</h1>
                        <div className='flex items-center'>
                            <h1 className='text-xl'>Go</h1>
                            <img src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/30/737373/external-right-arrows-user-interface-smashingstocks-glyph-smashing-stocks.png" />
                        </div>
                    </div>
                </div>
            </Link>
            <Posts />
        </div>
    );
};

export default Home;