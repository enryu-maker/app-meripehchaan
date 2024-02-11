import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from './HomeComp/Dashboard'
import Activity from './HomeComp/Activity'
import Card from './HomeComp/Card'

export default function Home() {
    const navigate = useNavigate()
    const [active, setActive] = React.useState(0)
    function handleClick(active) {
        switch (active) {
            case 0:
                return <Dashboard />
            case 1:
                return <Activity />
            case 2:
                return <Card />
        }
    }

    return (
        <div
            className='w-full font-fira flex flex-col justify-center items-center bg-white '
        >
            <h2 className="font-black lg:w-[83%] w-[88%] self-center text-xl tracking-widest lg:text-4xl  text-black font-fira mt-10 ">
                Welcome Back, Sarah!
            </h2>
            <div
                className='lg:w-[83%] w-[88%] flex items-center justify-evenly lg:justify-start space-x-5  mt-8 border-b-2 pb-[13px]'>
                <button
                    onClick={() => setActive(0)}
                    className={`${active === 0 ? "text-black font-bold underline-offset-[20px] underline" : "text-gray-400 font-medium"} tracking-widest text-base`}
                >
                    Dashboard
                </button>
                <button
                    onClick={() => setActive(1)}
                    className={`${active === 1 ? "text-black font-bold underline-offset-[20px] underline" : "text-gray-400 font-medium"} tracking-widest text-base`}
                >
                    Activity
                </button>
                <button
                    onClick={() => setActive(2)}
                    className={`${active === 2 ? "text-black font-bold underline-offset-[20px] underline" : "text-gray-400 font-medium"} tracking-widest text-base`}
                >
                    Visiting cards
                </button>
            </div>
            {handleClick(active)}
        </div>
    )
}
