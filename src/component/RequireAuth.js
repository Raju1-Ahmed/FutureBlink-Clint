import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <div className='text-center text-3x mt-24 mb-64'><p >Loading...</p></div>;
    }

    if(!user){
        return <Navigate to="/signup" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;