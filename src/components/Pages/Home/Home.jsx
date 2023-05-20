import React from 'react';
import { AiFillPlusCircle } from "react-icons/ai"
import { CiSearch } from "react-icons/ci"
import { TbPhone } from "react-icons/tb"
import ChatAvatar from '../../ChatAvatar/ChatAvatar';
import person from "../../../assets/person.jpg"

const Home = () => {
    return (
        <div className='grid grid-cols-4 h-screen'>
            <div className='col-span-1 px-8 pt-3 border-r'>
                <div className='flex justify-between items-center border-b pb-4'>
                    <p className='text-lg font-semibold text-gray-700'>Messages</p>
                    <AiFillPlusCircle size={30} color='#5271FF' />
                </div>
                <div className='mt-2 items-center bg-slate-100 flex rounded-lg'>
                    <input className='bg-slate-100 w-full py-2 ml-2 focus:outline-none' type="text" placeholder='Search people' />
                    <CiSearch size={24} className='text-gray-500 cursor-pointer mr-1' />
                </div>
                <div >
                    {
                        [1, 1, 1, 1, 1, 1].map((item, idx) => (
                            <ChatAvatar key={idx} active={idx == 1 ? true : false} />
                        ))
                    }
                </div>
            </div>
            <div className='col-span-3 pt-3'>
                <div className='flex justify-between items-center border-b pb-4 px-8'>
                    <div className='flex items-center gap-4'>
                        <div><img className='w-10 h-10 rounded' src={person} alt="" /></div>
                        <div>
                            <p className='text-lg font-semibold text-gray-700'>Tanjidul Ahad</p>
                            <div className='flex gap-2 items-center'>
                                <div className='bg-green-700 rounded-full max-w-[10px] max-h-[10px] w-2 h-2'></div>
                                <p>Online</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center bg-blue-200 gap-2 px-3 py-2 rounded-md cursor-pointer'>
                        <TbPhone size={24} color='#5271FF' />
                        <p>Call</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;