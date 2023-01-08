import React from 'react';

const Post = ({post}) => {
    const { name, image, } = post;
    console.log("check post", post);
    return (
            <div style={{ background: 'rgb(255 255 255)' }} className=' w-96 mx-auto p-3
            transition ease-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
            rounded shadow-2xl d-flex justify-start' >
                <div> <img src={image} alt="" /> </div>
                <div className=' p-5 '>
                    <div> <h2 className='font-semibold leading-normal text-xl font-sans text-left text-black' > {name} </h2> </div>
                    <div>
                        <div className='flex mt-5 justify-between ' >
                            <div>
                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <img src="https://img.icons8.com/color/28/null/calendar--v1.png" />
                                    </div>
                                    <div> <p className='text-base p-3'>  August 4, 2022 </p> </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <a href="" className='text-xl'>   Start reading-</a>
                                </div>
                                <div>
                                    <a href="">
                                        <img src="https://img.icons8.com/emoji/28/null/right-arrow-emoji.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Post;

