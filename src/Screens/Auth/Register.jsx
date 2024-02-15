import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMAGE } from '../../Components/Image'
import { useDispatch } from 'react-redux'
import { RegisterAction } from '../../Store/actions'
import { ThreeDots } from 'react-loader-spinner'
import { Helmet } from 'react-helmet'

export default function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState({
        "name": "",
        "email": "",
        "password": ""
    })
    return (
        <div
            className='w-full h-[75vh] font-fira  flex flex-col justify-center items-center bg-white'
        >
            <Helmet>
                <title>Register on Meri Pehchaan</title>
                <meta name="description" content="Register on Meri Pehchaan to create your digital identity. Access digital cards and manage your online presence seamlessly." />
                <meta name="keywords" content="Register, digital identity, Meri Pehchaan, online presence, create account" />
            </Helmet>
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
                    value={data.name}
                    placeholder='Jhon Doe'
                    onChange={(e) => {
                        setData({ ...data, name: e.target.value })
                    }}
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
                    value={data.email}
                    onChange={(e) => {
                        setData({ ...data, email: e.target.value })
                    }}
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
                    value={data.password}
                    onChange={(e) => {
                        setData({ ...data, password: e.target.value })
                    }}
                    placeholder='Password'
                    className='border-2 w-full py-2 rounded-md pl-2'
                />
            </div>
            <button
                onClick={() => {
                    dispatch(RegisterAction(data, navigate, setLoading))
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
                        "Signup"
                }
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
