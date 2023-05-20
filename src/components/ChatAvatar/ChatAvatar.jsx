import React from 'react';
import person from "../../assets/person.jpg"
const ChatAvatar = ({active}) => {
    return (
        <div className={`flex px-2 py-3 rounded-lg my-4 ${active && "bg-gray-100"} cursor-pointer`}>
            <div className='flex-[1]'><img className='w-10 h-10 rounded-md' src={person} alt="" /></div>
            <div className='flex-[4]'>
                <div className='flex justify-between'>
                <h3 className='font-semibold'>Tanjidul Ahad</h3>
                <p>12m</p>
                </div>
                <div>
                    <p className='text-xs'>Wow Amazing 😎</p>
                </div>
            </div>
        </div>
    );
};

export default ChatAvatar;