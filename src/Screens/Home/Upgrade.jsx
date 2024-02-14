import React from 'react'
import { LuCrown } from "react-icons/lu";
export default function Upgrade() {
    const data = [
        {
            name: "Free",
            recommended: false,
            price: "Free"
        },
        {
            name: "Pro",
            recommended: true,
            price: "₹ 500"
        },
        {
            name: "Pro +",
            recommended: false,
            price: "₹ 1000"
        }
    ]
    return (
        <div
            className='w-full font-fira flex flex-col justify-center items-center bg-white '
        >
            <h2 className="font-black flex items-center lg:w-[83%] w-[88%] self-center text-xl tracking-widest lg:text-4xl  text-black font-fira mt-10 ">
                Upgrade to Premium &nbsp; <LuCrown className=' text-[#FFD700]' />
            </h2>
            <div className='flex lg:w-[83%] w-[88%] flex-wrap justify-between items-center mt-10'>
                {
                    data.map((item, index) => (
                        <div
                            className={`rounded-lg h-[550px] lg:w-[28%]  ${item?.recommended?" border-[3px] border-[#FFD700]":"shadow-xl"} flex flex-col items-center justify-evenly`}
                        >
                            <h1
                                className=' text-xl font-black tracking-widest'
                            >
                                {item?.name}
                            </h1>
                            <button
                                className={`${item?.recommended ? "bg-black text-white" : "border-2 text-black"} py-1 px-4 rounded-md tracking-wider`}
                            >
                                {item?.price}
                            </button>
                            <div className=' w-[88%] border-b-2'/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
