import React from 'react'
import { useDispatch } from 'react-redux'
import { LogoutAction } from '../../Store/actions'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
export default function Settings() {
    const [active, setActive] = React.useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div
            className='w-full font-fira flex flex-col justify-center items-center bg-white '
        >
            <Helmet>
                    <title>Account Settings - Meri Pehchaan</title>
                    <meta name="description" content="Manage your account settings and preferences with Meri Pehchaan. Customize your profile, security settings, and notification preferences easily." />
                    <meta name="keywords" content="Manage your account settings and preferences with Meri Pehchaan. Customize your profile, security settings, and notification preferences easily." />
                </Helmet>
            <h2 className="font-black lg:w-[83%] w-[88%] self-center text-xl tracking-widest lg:text-4xl  text-black font-fira mt-10 ">
                {`Settings`}
            </h2>
            <div
                className='lg:w-[83%] w-[88%] flex items-center justify-evenly lg:justify-start space-x-5  mt-8 border-b-2 pb-[13px]'>
                <button
                    onClick={() => setActive(0)}
                    className={`${active === 0 ? "text-black font-bold underline-offset-[20px] underline" : "text-gray-400 font-medium"} tracking-widest text-base`}
                >
                    Account 
                </button>
                <button
                    onClick={() => setActive(1)}
                    className={`${active === 1 ? "text-black font-bold underline-offset-[20px] underline" : "text-gray-400 font-medium"} tracking-widest text-base`}
                >
                    Theme
                </button>
                <button
                    onClick={() =>{
                        dispatch(LogoutAction(navigate))
                    }}
                    className={`text-red-500 font-medium tracking-widest text-base`}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
