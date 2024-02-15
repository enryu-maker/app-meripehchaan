import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMAGE } from '../../../Components/Image'
import { development, development_imgurl } from '../../../Helper/Helper'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner'
import { Helmet } from 'react-helmet'
export default function Dashboard({
    data
}) {
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()
    return (
        <>
            <div
                className='lg:w-[83%] w-[88%] flex items-center justify-between mt-10 '>
                <Helmet>
                    <title>Meri Pehchaan Dashboard - Manage Your Digital Cards</title>
                    <meta name="description" content="Effortlessly manage your digital identity with Meri Pehchaan's intuitive dashboard. Organize, update, and share your digital cards seamlessly" />
                    <meta name="keywords" content="Dashboard, digital identity management, manage digital cards, Meri Pehchaan dashboard" />
                </Helmet>
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
                {
                    data?.map((item, index) => (
                        <div
                            className='lg:h-[260px] flex flex-col py-4 lg:py-0 lg:flex-row justify-center items-center rounded-lg w-[500px] shadow-xl '
                        >
                            <div
                                className='lg:w-[45%] flex flex-col justify-center items-center'
                            >
                                <img
                                    className=" h-[100px] w-[100px] object-cover rounded-full"
                                    src={development_imgurl + item?.photo}
                                    lazy="true"
                                    alt="user"
                                />
                                <h2 className="font-bold text-lg pt-5 text-center text-black">
                                    {item?.name}
                                </h2>
                                <h2 className="text-sm pt-2 tracking-wide text-center text-gray-500">
                                    {item?.headline}
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
                                            href={`mailto:${item?.email}`}
                                            className="font-bold text-xs text-black  ">
                                            {item?.email}
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
                                            href={`tel:${item?.mobile_no}`}
                                            className="font-bold text-xs text-black  ">
                                            {item?.mobile_no}
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
                                            href={item?.website}
                                            className="font-bold text-xs text-black  ">
                                            {item?.website}
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
                                        onClick={async () => {
                                            setLoading(true)
                                            window.focus()
                                            await navigator.clipboard.writeText(item?.share)
                                            setTimeout(() => {
                                                toast.success("Link Copied", {
                                                    position: "top-center",
                                                    autoClose: 1000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "light",
                                                });
                                                setLoading(false)
                                            }, 3000)
                                        }}
                                        disabled={loading}
                                        className="bg-black px-4 mt-3 font-semibold tracking-widest text-sm text-white py-1  rounded-lg ">
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
                                                "Copy"
                                        }
                                    </button>
                                    <button
                                        className=" border-2 px-4 mt-3 font-semibold tracking-widest text-sm text-black py-1  rounded-lg ">
                                        Views :  {item?.views}
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))
                }

                {/* card end */}
            </div>
        </>
    )
}
