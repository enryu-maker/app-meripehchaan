import React from 'react'
import { IMAGE } from '../../Components/Image';

export default function Otp() {
    const [otp, setOtp] = React.useState('')
    return (
        <div
            className='w-full font-fira h-[90vh] flex flex-col justify-center items-center bg-white'
        >
            <img
                className="h-12 w-auto"
                src={IMAGE.logo}
                alt="Your Company"
            />
            <h2 className="font-bold text-2xl text-center text-black font-fira">
                Email Verification
            </h2>
            <h2 className="font-bold w-[88%] text-center text-sm mt-2 text-gray-400 font-fira">
                We have sent a code to your email ba**@dipainhouse.com
            </h2>
            <div
                className='w-[88%] lg:w-[450px] flex flex-col gap-y-1 mt-5'
            >
                <p
                    className='text-gray-600 text-sm font-medium'
                >
                    Otp
                </p>
                <input
                    placeholder='123456'
                    className='border-2 w-full py-2 rounded-md pl-2'
                />
            </div>
            <button
                className=' bg-black mt-5 tracking-wider w-[88%] lg:w-[450px] py-2 text-white font-semibold rounded-lg '>
                Verify
            </button>

        </div>
    )
}
