import React, { useEffect, useState } from 'react';
import Signup from '../../Signup/Signup';
import Signin from '../../Signin/Signin';
import { Transition } from '@headlessui/react'
import "./Auth.css"
import LoadingOverlay from '../../LoadingOverlay/LoadingOverlay';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomNotification from '../../utilities/customNotification';
import { resetSignupError } from '../../redux/reducers/authSlice';

const Auth = () => {
    const dispatch=useDispatch()
    const [isSignin, setIsSignin] = useState(true)

    const { error: signinError,methode,loading } = useSelector((state) => state.auth)


    useEffect(() => {
        if (signinError.status == "error" && methode != "logout" && !loading) {
          toast.error(<CustomNotification message={signinError.message} />)
          dispatch(resetSignupError())
          console.log("inside sign in useEffect error");
        }
        if (signinError.status == "success" && methode != "logout" && !loading) {
          toast.success(<CustomNotification message={signinError.message} />)
          dispatch(resetSignupError())
        }
    
      }, [signinError,methode,loading])
    
    return (
        <>
        {loading && <LoadingOverlay/>}
        <div className='relative'>
            <div className="absolute px-8 py-5">
                <p className='shiny md:font-extrabold md:text-5xl font-bold text-3xl'>Rimchat.</p>
            </div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-pink-200 to-blue-300 dura">
                {isSignin ?
                    <Signin setIsSignin={setIsSignin} />
                    :
                    <Signup setIsSignin={setIsSignin} />}

            </div>
        </div>
        </>
    );
};

export default Auth;