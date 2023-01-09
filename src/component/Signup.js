import React from 'react';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (error) {
        return (
            <div>
               <div className='text-center text-3x mt-24 mb-64'><p >{ error.message}</p></div>
            </div>
        );
    }
    if (loading) {
        return <div className='text-center text-3x mt-24 mb-64'><p >Loading...</p></div> ;
        
    }
    if (user) {
        return  navigate('/')
      }

    return (
        <div className='mt-24 mb-24'>
            <div className='flex mt-24 mb-64 justify-center items-center'>
            <button className='flex  btn items-center' onClick={() => signInWithGoogle()}>
            
              <p className='text-xl p-2'>  SignIn With Google</p>
              <img src="https://img.icons8.com/ios-filled/30/FA5252/google-logo.png"/>
                </button>
            </div>
        </div>
    );
};

export default Signup;