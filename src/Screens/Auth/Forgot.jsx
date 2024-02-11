import React from 'react'
import Otp from './Otp'
import { useNavigate } from 'react-router-dom'
import { IMAGE } from '../../Components/Image'
export default function Forgot() {
    const navigate = useNavigate()
    return (
        <div
            className='w-full  font-fira h-[90vh] flex flex-col justify-center items-center bg-white'
        >
            <img
                className="h-12 w-auto"
                src={IMAGE.logo}
                alt="Your Company"
            />
            <h2 className="font-bold text-xl text-center text-black mt-2 font-fira">
                Forgot Password
            </h2>
            <div
                className='w-[88%] lg:w-[450px] flex flex-col gap-y-1 '
            >
                <p
                    className='text-gray-600 text-sm font-medium'
                >
                    Email
                </p>
                <input
                    placeholder='Email'
                    className='border-2 w-full py-2 rounded-md pl-2'
                />
            </div>
            <button
                onClick={() => {
                    navigate('/otp')
                }}
                className=' bg-black mt-5 tracking-wider w-[88%] lg:w-[450px] py-2 text-white font-semibold rounded-lg '>
                Send OTP
            </button>
        </div>
    )
}
