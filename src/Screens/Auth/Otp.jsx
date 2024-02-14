import React from 'react'
import { IMAGE } from '../../Components/Image';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { VerifyAction } from '../../Store/actions';

export default function Otp() {
    const { state } = useLocation()
    const [otp, setOtp] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div
            className='w-full font-fira h-[75vh] flex flex-col justify-center items-center bg-white'
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
                {`We have sent a code to your email ${state}`}
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
                    value={otp}
                    onChange={(e) => {
                        setOtp(e.target.value)
                    }}
                    placeholder='1234'
                    maxLength={4}
                    className='border-2 w-full py-2 rounded-md pl-2'
                />
            </div>
            <button
                onClick={() => {
                    dispatch(VerifyAction({ email: state, otp: otp }, navigate, setLoading))
                }}
                className=' bg-black mt-5 flex justify-center items-center tracking-wider w-[88%] lg:w-[450px] py-2 text-white font-semibold rounded-lg '>
                {
                    loading ?
                        <ThreeDots
                            visible={true}
                            height="30"
                            width="20"
                            color="#fff"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                        :
                        "Verify"
                }
            </button>

        </div>
    )
}
