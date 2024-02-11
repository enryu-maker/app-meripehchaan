import React from 'react'
import Preview from './Preview'
import { IMAGE } from '../../../Components/Image'
import { Link } from 'react-router-dom'

export default function NewCard() {
    const [data, setData] = React.useState({
        "type": 0,
        "name": "",
        "title": "",
        "headline": "",
        "company": "",
        "company_desc": "",
        "email": "",
        "phone": "",
        "website": "",
        "fb_link": "",
        "insta_link": "",
        "twitter_link": "",
        "linkdein_link": "",
    })
    return (
        <div
            className='w-full font-fira flex flex-col justify-center items-center bg-white mb-[20px] '
        >
            <div
                className='lg:w-[83%] w-[88%] flex self-center py-5 font-fira items-center text-sm space-x-2'>
                <Link
                    className=' hover:text-primary'
                    to={'/home'}
                >
                    Home
                </Link>
                <h1>
                    |
                </h1>
                <h1>
                   Create Card
                </h1>
            </div>

            <h2 className="font-black lg:w-[83%] w-[88%] self-center text-center lg:text-start text-xl tracking-widest lg:text-4xl  text-black font-fira ">
                Create a New Digital Card
            </h2>
            <div class="flex flex-col lg:flex-row justify-between items-start lg:w-[83%]   w-[88%] py-10">
                <div className='flex flex-col lg:w-[65%]'>
                    <h2 className="font-black text-left  text-xl tracking-widest  text-black font-fira">
                        Template
                    </h2>
                    <div className='flex flex-wrap w-full justify-start space-x-3 items-start py-4'>
                        <button
                            onClick={() => setData({ ...data, type: 0 })}
                            className={`${data.type === 0 ? "bg-black text-white" : ""} border-2 px-4 text-base py-1 tracking-widest rounded-lg`}>
                            Simple
                        </button>
                        <button
                            onClick={() => setData({ ...data, type: 1 })}
                            className={`${data.type === 1 ? "bg-black text-white" : ""} border-2 px-4 text-base py-1 tracking-widest rounded-lg`}>
                            Modern
                        </button>
                        <button
                            onClick={() => setData({ ...data, type: 2 })}
                            className={`${data.type === 2 ? "bg-black text-white" : ""} border-2 px-4 text-base py-1 tracking-widest rounded-lg`}>
                            Art
                        </button>
                    </div>
                    <h2 className="font-black text-left text-xl tracking-widest  text-black font-fira">
                        Personal Info
                    </h2>
                    <div className='flex flex-wrap w-full justify-between items-start'>
                        <div
                            className='w-full lg:w-[350px] flex flex-col gap-y-1 mt-2 '
                        >
                            <p
                                className='text-gray-600 text-sm font-medium'
                            >
                                Profile Picture
                            </p>
                            <input
                                placeholder='+91 1234567890'
                                className='border-2 w-full py-2 rounded-md pl-2'
                            />
                        </div>
                        <div
                            className='w-full lg:w-[350px] flex flex-col gap-y-1 mt-2 '
                        >
                            <p
                                className='text-gray-600 text-sm font-medium'
                            >
                                Name
                            </p>
                            <input
                                value={data?.name}
                                onChange={(e) => {
                                    setData({ ...data, name: e.target.value })
                                }}
                                placeholder='Jhon Doe'
                                className='border-2 w-full py-2 rounded-md pl-2 '
                            />
                        </div>
                        <div
                            className='w-full lg:w-[350px] flex flex-col gap-y-1 mt-2 '
                        >
                            <p
                                className='text-gray-600 text-sm font-medium'
                            >
                                Headline
                            </p>
                            <input
                                value={data?.headline}
                                onChange={(e) => {
                                    setData({ ...data, headline: e.target.value })
                                }}
                                placeholder='Tagline'
                                className='border-2 w-full py-2 rounded-md pl-2'
                            />
                        </div>
                        <div
                            className='w-full lg:w-[350px] flex flex-col gap-y-1 mt-2 '
                        >
                            <p
                                className='text-gray-600 text-sm font-medium'
                            >
                                Title
                            </p>
                            <input
                                value={data?.title}
                                onChange={(e) => {
                                    setData({ ...data, title: e.target.value })
                                }}
                                placeholder='CEO | Manager | Director'
                                className='border-2 w-full py-2 rounded-md pl-2'
                            />
                        </div>

                        <div
                            className='w-full lg:w-[350px] flex flex-col gap-y-1 mt-2 '
                        >
                            <p
                                className='text-gray-600 text-sm font-medium'
                            >
                                Phone Number
                            </p>
                            <input
                                value={data?.phone}
                                onChange={(e) => {
                                    setData({ ...data, phone: e.target.value })
                                }}
                                placeholder='+91 1234567890'
                                className='border-2 w-full py-2 rounded-md pl-2'
                            />
                        </div>
                        <div
                            className='w-full lg:w-[350px] flex flex-col gap-y-1 mt-2 '
                        >
                            <p
                                className='text-gray-600 text-sm font-medium'
                            >
                                Email Address
                            </p>
                            <input
                                value={data?.email}
                                onChange={(e) => {
                                    setData({ ...data, email: e.target.value })
                                }}
                                placeholder='jhon@example.com'
                                className='border-2 w-full py-2 rounded-md pl-2'
                            />
                        </div>
                        <div
                            className='w-full lg:w-[350px] flex flex-col gap-y-1 mt-2 '

                        >
                            <p
                                className='text-gray-600 text-sm font-medium'
                            >
                                Website
                            </p>
                            <input
                                value={data?.website}
                                onChange={(e) => {
                                    setData({ ...data, website: e.target.value })
                                }}
                                placeholder='example.com'
                                className='border-2 w-full py-2 rounded-md pl-2'
                            />
                        </div>
                        <div
                            className='w-full lg:w-[350px] flex flex-col gap-y-1 mt-2 '

                        >
                            <p
                                className='text-gray-600 text-sm font-medium'
                            >
                                Company
                            </p>
                            <input
                                value={data?.company}
                                onChange={(e) => {
                                    setData({ ...data, company: e.target.value })
                                }}
                                placeholder='Amazon | Facebook | Twitter'
                                className='border-2 w-full py-2 rounded-md pl-2'
                            />
                        </div>

                        <div
                            className='w-full lg:w-[350px] flex flex-col gap-y-1 mt-2 '
                        >
                            <p
                                className='text-gray-600 text-sm font-medium'
                            >
                                Company Description
                            </p>
                            <textarea
                                value={data?.company_desc}
                                onChange={(e) => {
                                    setData({ ...data, company_desc: e.target.value })
                                }}
                                placeholder='About Company'
                                className='border-2 w-full h-[100px] py-2 rounded-md pl-2'
                            />
                        </div>
                    </div>
                    <h2 className="font-black text-left  text-xl tracking-widest py-5  text-black font-fira">
                        Social Links
                    </h2>
                    <div
                        className=' space-y-3'
                    >
                        <div
                            className="flex justify-start items-center"
                        >
                            <div
                                className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                            >
                                <img
                                    className="h-[20px] w-[20px] text-black "
                                    src={IMAGE.facebook}
                                    alt="fb"
                                />
                            </div>
                            <input
                                value={data?.fb_link}
                                onChange={(e) => {
                                    setData({ ...data, fb_link: e.target.value })
                                }}
                                placeholder='Facebook Page Link'
                                className='border-2 ml-4 w-[88%] py-2 rounded-md pl-2'
                            />
                        </div>
                        <div
                            className="flex justify-start items-center"
                        >
                            <div
                                className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                            >
                                <img
                                    className="h-[20px] w-[20px] text-black "
                                    src={IMAGE.instagram}
                                    alt="fb"
                                />
                            </div>
                            <input
                                value={data?.insta_link}
                                onChange={(e) => {
                                    setData({ ...data, insta_link: e.target.value })
                                }}
                                placeholder='Instagram Page Link'
                                className='border-2 ml-4 w-[88%] py-2 rounded-md pl-2'
                            />
                        </div>
                        <div
                            className="flex justify-start items-center"
                        >
                            <div
                                className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                            >
                                <img
                                    className="h-[20px] w-[20px] text-black "
                                    src={IMAGE.linkedin}
                                    alt="fb"
                                />
                            </div>
                            <input
                                value={data?.linkdein_link}
                                onChange={(e) => {
                                    setData({ ...data, linkdein_link: e.target.value })
                                }}
                                placeholder='Linkedin Page Link'
                                className='border-2 ml-4 w-[88%] py-2 rounded-md pl-2'
                            />
                        </div>
                        <div
                            className="flex justify-start items-center"
                        >
                            <div
                                className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                            >
                                <img
                                    className="h-[20px] w-[20px] text-black "
                                    src={IMAGE.twitter}
                                    alt="fb"
                                />
                            </div>
                            <input
                                value={data?.twitter_link}
                                onChange={(e) => {
                                    setData({ ...data, twitter_link: e.target.value })
                                }}
                                placeholder='Twitter Page Link'
                                className='border-2 ml-4 w-[88%] py-2 rounded-md pl-2'
                            />
                        </div>

                    </div>
                    <button
                        className=' bg-black mt-5 tracking-wider w-full lg:w-[300px] self-center py-2 text-white font-semibold rounded-lg '>
                        Save Card
                    </button>
                </div>
                <div className='lg:w-[30%] w-full  '>
                    <h2 className="font-black text-center lg:text-left text-3xl tracking-widest py-5  text-black font-fira">
                        Preview
                    </h2>
                    <div className="border-2 overflow-y-scroll h-[600px] w-full rounded-lg ">
                        <Preview data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}
