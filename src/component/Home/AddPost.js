import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'

const AddPost = () => {
    const [user,] = useAuthState(auth);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeDesc = (e) => {
        setDesc(e.target.value);
    }
    var date_time = moment().format("MMM Do YY");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userName: user.displayName,
            email: user.email,
            title,
            desc,
            file,
            date: date_time,

        }
    console.log(newPost)
        if (file) {
            const data = new FormData();
            const filename = Date.now() + '-' + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("https://futureblinkserver.onrender.com/upload", data)
            } catch (error) { }

        }
        try {
            const res = await axios.post('/https://futureblinkserver.onrender.com/post', newPost);
            window.location.replace("/post" + res.data._id);
        } catch (error) { }

        axios.post('https://futureblinkserver.onrender.com/post', newPost)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Blog is Posted');
                    e.target.reset();
                }
            })



    }
    return (
        <div className='mt-24 mb-48'>
            {file &&
                <img src={URL.createObjectURL(file)} alt="" className='flex justify-center items-center w-1/2 mx-auto' />
            }
            <form
                onSubmit={handleSubmit}
            >
                <div className='p-5 mt-5 w-1/2 bg-blue-900 shadow-xl h-auto mx-auto justify-end items-center  border border-white rounded-md '>
                    <div className='flex justify-center items-center'>
                        <input multiple
                            onChange={(e) => setFile(e.target.files[0])}
                            type="file" class="file-input w-full max-w-xs" />
                    </div>
                    <div className='flex w-full justify-evenly items-center mt-5'>
                        <div>
                            <h1 className='text-xl p-1'>Blog Title</h1>
                            <textarea
                                onChange={handleChangeTitle}
                                value={title}
                                type="text" placeholder='Blog Title' className='text-black bg-white rounded p-1 w-72' />
                        </div>
                        <div>
                            <h1 className='text-xl p-1'>Blog Description</h1>
                            <textarea
                                onChange={handleChangeDesc}
                                value={desc}
                                type="text" placeholder='Blog Description' className='text-black bg-white rounded p-1 w-72' />
                        </div>
                    </div>
                    <div className='flex justify-end items-center'>
                        <button className='btn w-48 mt-3' type='submit' >submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddPost;