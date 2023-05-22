import React from 'react';
import logo from "../../assets/logo.png"
import { TbSmartHome } from "react-icons/tb"
import { BsFillChatSquareDotsFill } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/reducers/authSlice';
import { FiSettings } from "react-icons/fi"
import { Dropdown } from 'antd';
import {IoMdLogOut} from "react-icons/io"


const Sidebar = () => {
    const dispatch = useDispatch()
    const items = [
        {
          key: '1',
          label: (
            <div onClick={() => dispatch(logOut())} className='flex items-center gap-2'>
                <IoMdLogOut/>
             <p>Logout</p> 
            </div>
          ),
        }
    ]
    return (
        <div className='flex-[1] shadow-lg flex flex-col'>
            <div className='flex justify-center mt-4'>
                <img className='w-20 h-20 cursor-pointer' src={logo} alt="" />
            </div>
            <div className='flex flex-[1] flex-col gap-4 justify-center items-center'>
                <TbSmartHome size={30} className='text-gray-500 cursor-pointer' />
                <BsFillChatSquareDotsFill size={30} className='text-[#5271FF] cursor-pointer' />
                <CiSearch size={30} className='text-gray-500 cursor-pointer' />
            </div>
            <div className='flex justify-center pb-4'>
            <Dropdown
            menu={{
                items,
                
              }}
              placement="top"
            >
                <FiSettings size={30} className='text-gray-500 cursor-pointer' />
                </Dropdown>
            </div>
        </div>
    );
};

export default Sidebar;