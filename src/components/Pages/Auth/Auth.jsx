import React, { useState } from 'react';
import Signup from '../../Signup/Signup';
import Signin from '../../Signin/Signin';
import { Transition } from '@headlessui/react'
import "./Auth.css"
import LoadingOverlay from '../../LoadingOverlay/LoadingOverlay';
import { useSelector } from 'react-redux';

const Auth = () => {
    const [isSignin, setIsSignin] = useState(true)
    const isLoading = useSelector((state) => state.auth.loading)
    return (
        <>
        {isLoading && <LoadingOverlay/>}
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