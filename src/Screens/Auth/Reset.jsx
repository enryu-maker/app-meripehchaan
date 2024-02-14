import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { IMAGE } from '../../Components/Image'
import { useLocation, useNavigate } from 'react-router-dom'
import { ResetAction } from '../../Store/actions'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
export default function Reset() {
    const location = useLocation()
    const uid = location.pathname.split('/')[2]
    const token = location.pathname.split('/')[3]
    const [loading, setLoading] = React.useState(false)
    const [show, setShow] = React.useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = React.useState({
        new_password: "",
        new_password1: ""
    })
    return (
        <div
            className='w-full  font-fira h-[75vh] flex flex-col justify-center items-center bg-white'
        >
            <img
                className="h-12 w-auto"
                src={IMAGE.logo}
                alt="Your Company"
            />
            <h2 className="font-bold text-2xl text-black font-fira">
                Password Reset
            </h2>
            <div
                className='w-[88%] lg:w-[450px] flex flex-col gap-y-1 mt-5'
            >
                <p
                    className='text-gray-600 text-sm font-medium'
                >
                    Password
                </p>
                <div
                    className='border-2 flex justify-between items-center px-2 w-full py-2 rounded-md '>

                    <input
                        value={data.new_password}
                        onChange={e => {
                            setData({ ...data, new_password: e.target.value })
                        }}
                        type={show ? "text" : "password"}
                        placeholder='Confirm Password'
                        className='w-full rounded-md  outline-none'
                    />
                    {
                        show ?
                            <IoEyeOutline
                                onClick={() => {
                                    setShow(!show)
                                }}
                                size={20}
                            />
                            :
                            <IoEyeOffOutline
                                onClick={() => {
                                    setShow(!show)
                                }}
                                size={20}
                            />
                    }
                </div>
            </div>
            <div
                className='w-[88%] lg:w-[450px] flex flex-col gap-y-1 mt-5'
            >
                <div className='flex justify-between items-center'>
                    <p
                        className='text-gray-600 text-sm font-medium'
                    >
                        Confirm Password
                    </p>
                    {
                        data?.new_password != data?.new_password1 && data.new_password1.length > 0 ?
                            <p
                                className='text-red-600 text-sm font-medium'
                            >
                                *Passwords do not match
                            </p>
                            : null
                    }
                </div>
                <div
                    className='border-2 flex justify-between items-center px-2 w-full py-2 rounded-md '>
                    <input
                        value={data.new_password1}
                        onChange={e => {
                            setData({ ...data, new_password1: e.target.value })
                        }}
                        type={show ? "text" : "password"}
                        placeholder='Confirm Password'
                        className='w-full rounded-md  outline-none'
                    />
                    {
                        show ?
                            <IoEyeOutline
                                onClick={() => {
                                    setShow(!show)
                                }}
                                size={20}
                            />
                            :
                            <IoEyeOffOutline
                                onClick={() => {
                                    setShow(!show)
                                }}
                                size={20}
                            />
                    }
                </div>

            </div>
            <button
                onClick={() => {
                    dispatch(ResetAction(data, navigate, setLoading, uid, token))
                }}
                disabled={loading}
                className=' bg-black mt-5 tracking-wider flex justify-center items-center w-[88%] lg:w-[450px] py-2 text-white font-semibold rounded-lg '>
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
                        "Reset Password"
                }
            </button>
        </div>
    )
}
