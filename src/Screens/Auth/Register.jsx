import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMAGE } from '../../Components/Image'

export default function Register() {
    const navigate = useNavigate()
    return (
        <div
            className='w-full h-[90vh] font-fira  flex flex-col justify-center items-center bg-white'
        >
            <img
                className="h-12 w-auto"
                src={IMAGE.logo}
                alt="Your Company"
            />
            <h2 className="font-bold text-2xl text-black font-fira">
                Create Your Account
            </h2>
            <div
                className='w-[88%] lg:w-[450px] flex flex-col gap-y-1 mt-5'
            >
                <p
                    className='text-gray-600 text-sm font-medium'
                >
                    Full Name
                </p>
                <input
                    placeholder='Jhon Doe'
                    className='border-2 w-full py-2 rounded-md pl-2'
                />
            </div>
            <div
                className='w-[88%] lg:w-[450px] flex flex-col gap-y-1 mt-5'
            >
                <p
                    className='text-gray-600 text-sm font-medium'
                >
                    Email
                </p>
                <input
                    placeholder='jhon@example.com'
                    className='border-2 w-full py-2 rounded-md pl-2'
                />
            </div>
            <div
                className='w-[88%] lg:w-[450px] flex flex-col gap-y-1 mt-5'
            >
                <p
                    className='text-gray-600 text-sm font-medium'
                >
                    Password
                </p>
                <input
                    placeholder='Password'
                    className='border-2 w-full py-2 rounded-md pl-2'
                />
            </div>
            <button
                className=' bg-black mt-5 tracking-wider w-[88%] lg:w-[450px] py-2 text-white font-semibold rounded-lg '>
                Signup
            </button>
            <div
                className='w-[88%] text-gray-600 tracking-widest text-sm lg:w-[450px] flex justify-center items-center gap-y-1 mt-5'
            >
                Already Have an Account ?
                <button
                    onClick={() => {
                        navigate('/login')
                    }}
                    className='text-black tracking-widest text-sm font-medium'
                >
                    &nbsp; Login
                </button>
            </div>
        </div>
    )
}
