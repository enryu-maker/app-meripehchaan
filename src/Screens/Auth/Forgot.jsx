import React from 'react'
import Otp from './Otp'
import { useNavigate } from 'react-router-dom'
import { IMAGE } from '../../Components/Image'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { ForgotAction, ResetAction } from '../../Store/actions'
import { ThreeDots } from 'react-loader-spinner'

export default function Forgot() {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    return (
        <div
            className='w-full  font-fira h-[75vh] flex flex-col justify-center items-center bg-white'
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
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    placeholder='Email'
                    className='border-2 w-full py-2 rounded-md pl-2'
                />
            </div>
            <button
                onClick={() => {
                    dispatch(ForgotAction({ email: email }, navigate, setLoading))
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
                        "Forgot Password"
                }
            </button>
        </div>
    )
}
