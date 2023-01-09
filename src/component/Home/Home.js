import React from 'react';
import Posts from './Posts';

const Home = () => {
    return (
        <div>
            <div className='m-12 flex justify-center'>
                <div className='pl-5  border border-white rounded-md '>  Write Your Favorite Blog
                <label for="my-modal-3" class="btn  bg-none"> Go </label>
                </div>
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    </div>
                </div>
            </div>
            <Posts />
        </div>
    );
};

export default Home;