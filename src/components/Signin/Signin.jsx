import React from 'react';

const Signin = ({setIsSignin}) => {
    return (

        <div className="backdrop-blur-xl bg-white/40 rounded-lg shadow-lg w-[500px] p-8 m-5 md:m-0">
        <h2 className="text-2xl font-bold mb-6 text-[rgb(2,76,110)]">Sign in</h2>
        <form>
          <div className="mb-4">
            <label className="block text-[rgb(2,76,110)] text-sm font-bold mb-2 " htmlFor="email">
              Email
            </label>
            <input
              className="bg-white/60 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[rgb(2,76,110)] text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="bg-white/60 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <button
              className="bg-[rgb(2,76,110)] hover:bg-[rgba(2,76,110,.8)] text-white font-bold py-2 md:px-4 px-2 w-[100px] md:w-auto rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign in
            </button>
            <p onClick={()=>setIsSignin((isSignin)=>!isSignin)} className="align-baseline font-bold md:text-sm text-xs text-gray-500 hover:text-gray-700 cursor-pointer" >
              Don't have an account? Sign up.
            </p>
          </div>
        </form>
      </div>
    );
};

export default Signin;