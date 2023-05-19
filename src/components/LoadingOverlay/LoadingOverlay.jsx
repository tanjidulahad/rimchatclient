import React from 'react';
import loader from "../../assets/loader.gif"

const LoadingOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-75 bg-gray-900 z-50">
      <div > <img className='w-20 h-20' src={loader} alt="" /></div>
    </div>
  );
};

export default LoadingOverlay;