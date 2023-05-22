import React from 'react';

const CustomNotification = ({ closeToast, toastProps, message }) => {
  return (
    <div className="max-w-md w-full flex">
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className="text-sm text-gray-900 font-bold">
              Rimchat says
            </p>
            <p className={`mt-1 text-sm ${toastProps?.type=="success" && "text-green-500"} ${toastProps?.type=="error" && "text-red-500"}`}>
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={closeToast}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#336989] hover:text-indigo-500 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>

  );
};

export default CustomNotification;