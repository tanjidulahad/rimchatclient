import React from 'react';
import logo from "../../assets/logo.png"
import {TbSmartHome} from "react-icons/tb"
import {BsFillChatSquareDotsFill} from "react-icons/bs"
import {CiSearch} from "react-icons/ci"
const Sidebar = () => {
    return (
        <div className='flex-[1] shadow-lg flex flex-col'>
        <div className='flex justify-center mt-4'>
            <img className='w-14 h-14 cursor-pointer' src={logo} alt="" />
        </div>
        <div className='flex flex-[1] flex-col gap-4 justify-center items-center'>
            <TbSmartHome size={24} className='text-gray-500 cursor-pointer'/>
            <BsFillChatSquareDotsFill size={24} className='text-[#5271FF] cursor-pointer'/>
            <CiSearch size={24} className='text-gray-500 cursor-pointer'/>
        </div>
    </div>
    );
};

export default Sidebar;