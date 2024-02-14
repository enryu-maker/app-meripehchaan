import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMAGE } from '../../Components/Image'
import { LoginAction } from '../../Store/actions'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
export default function Login() {
    const navigate = useNavigate()
    const [data, setData] = React.useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
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
                Login to Continue
            </h2>
            <div
                className='w-[88%] lg:w-[450px] flex flex-col gap-y-1 mt-5'
            >
                <p
                    className='text-gray-600 text-sm font-medium'
                >
                    Email
                </p>
                <input
                    value={data?.email}
                    onChange={(e) => {
                        setData({ ...data, email: e.target.value })
                    }}
                    placeholder='Email'
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
                    value={data?.password}
                    onChange={(e) => {
                        setData({ ...data, password: e.target.value })
                    }}
                    type='password'
                    placeholder='Password'
                    className='border-2 w-full py-2 rounded-md pl-2'
                />
            </div>
            <div
                className='w-[88%] lg:w-[450px] flex justify-end items-end flex-col gap-y-1 mt-5'
            >
                <button
                    onClick={() => {
                        navigate('/forgot')
                    }}
                    className='text-gray-600 tracking-widest text-sm font-medium underline'
                >
                    Forgot Password?
                </button>
            </div>
            <button
                onClick={() => {
                    dispatch(LoginAction(data, navigate, setLoading))
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
                        "Login"
                }
            </button>
            <div
                className='w-[88%] lg:w-[450px] text-gray-600 tracking-widest text-sm flex justify-center items-center gap-y-1 mt-5'
            >
                New to Meri Pehchaan ?
                <button
                    onClick={() => {
                        navigate('/register')
                    }}
                    className='text-black tracking-widest text-sm font-medium'
                >
                    &nbsp; Signup
                </button>
            </div>
        </div>
    )
}
