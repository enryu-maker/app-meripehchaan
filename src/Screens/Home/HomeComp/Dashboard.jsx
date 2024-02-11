import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMAGE } from '../../../Components/Image'

export default function Dashboard() {
    const navigate = useNavigate()
    return (
        <>
            <div
                className='lg:w-[83%] w-[88%] flex items-center justify-between mt-10 '>
                <h2 className="font-black text-xl tracking-widest lg:text-3xl  text-black font-fira">
                    Your Digital Visiting Cards
                </h2>
                <button
                    onClick={() => {
                        navigate('/create-new-card')
                    }}
                    className=" bg-gray-100 font-semibold text-base px-6 py-2 rounded-lg">
                    New card
                </button>
            </div>
            <div
                className='lg:w-[83%] w-[88%] flex flex-wrap items-center justify-between mt-10 '>
                {/* card */}
                <div
                    className='lg:h-[260px] flex flex-col py-4 lg:py-0 lg:flex-row justify-center items-center rounded-lg w-[500px] shadow-xl '
                >
                    <div
                        className='lg:w-[45%] flex flex-col justify-center items-center'
                    >
                        <img
                            className=" h-[100px] w-[100px] object-cover rounded-full"
                            src="https://res.cloudinary.com/terieyenike/image/upload/c_thumb,g_face,w_317/v1637140050/calm_teri_b3eziq.jpg"
                            lazy="true"
                            alt="user"
                        />
                        <h2 className="font-bold text-lg pt-5 text-center text-black">
                            Faisal Kadri
                        </h2>
                        <h2 className="text-sm pt-2 tracking-wide text-center text-gray-500">
                            Director at Publikcity Media Private Limited
                        </h2>
                    </div>
                    <div
                        className='lg:w-[50%] flex flex-col items-start w-[88%] lg:mt-0 mt-4 '
                    >
                        <div
                            className="flex justify-start items-center"
                        >
                            <div
                                className="h-[35px] w-[35px] rounded-lg  bg-gray-200 flex justify-center items-center"
                            >
                                <img
                                    className="h-[15px] w-[15px] text-black "
                                    src={IMAGE.mail}
                                    alt="mail"
                                />
                            </div>
                            <div
                                className="flex justify-center items-start flex-col mx-3"
                            >
                                <a
                                    href="mailto:info@publikcitymedia.com"
                                    className="font-bold text-xs text-black  ">
                                    faisal.mpyc@gmail.com
                                </a>
                                <h2 className="font-semibold text-xs text-gray-500  ">
                                    Office
                                </h2 >
                            </div>
                        </div>
                        <div
                            className="flex justify-start items-center mt-5"
                        >
                            <div
                                className="h-[35px] w-[35px] rounded-lg  bg-gray-200 flex justify-center items-center"
                            >
                                <img
                                    className="h-[15px] w-[15px] text-black "
                                    src={IMAGE.telephone}
                                    alt="phone"
                                />
                            </div>
                            <div
                                className="flex justify-center items-start flex-col mx-3"
                            >
                                <a
                                    href="tel:+966555555555"
                                    className="font-bold text-xs text-black  ">
                                    7020175764
                                </a>
                                <h2 className="font-semibold text-xs text-gray-500  ">
                                    Office
                                </h2 >
                            </div>
                        </div>
                        <div
                            className="flex justify-start items-center mt-5"
                        >
                            <div
                                className="h-[35px] w-[35px] rounded-lg  bg-gray-200 flex justify-center items-center"
                            >
                                <img
                                    className="h-[15px] w-[15px] text-black "
                                    src={IMAGE.web}
                                    alt="phone"
                                />
                            </div>
                            <div
                                className="flex justify-center items-start flex-col mx-3"
                            >
                                <a
                                    href="www.publikcity.com"
                                    className="font-bold text-xs text-black  ">
                                    www.publikcity.com
                                </a>
                                <h2 className="font-semibold text-xs text-gray-500  ">
                                    Office
                                </h2 >
                            </div>

                        </div>
                        <div
                        className='w-full flex justify-between'
                        >
                        <button
                            className=" bg-black px-4 mt-3 font-semibold tracking-widest text-sm text-white py-1  rounded-lg ">
                            Share
                        </button>
                        <button
                            className=" border-2 px-4 mt-3 font-semibold tracking-widest text-sm text-black py-1  rounded-lg ">
                            Views : 140
                        </button>
                        </div>
                        
                    </div>
                </div>
                {/* card end */}
            </div>
        </>
    )
}
