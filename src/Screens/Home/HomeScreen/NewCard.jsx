import React from 'react'
import Preview from './Preview'
import { IMAGE } from '../../../Components/Image'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThreeDots } from 'react-loader-spinner'
import { AddCardAction } from '../../../Store/actions'
import { LuCrown } from 'react-icons/lu'

export default function NewCard() {
    const [selectedFile, setSelectedFile] = React.useState("No file chosen");
    const profile = useSelector(state => state.Reducers.profile)
    const [file, setFile] = React.useState("");
    function handleChange(e) {
        setSelectedFile(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const [data, setData] = React.useState({
        "template": 0,
        "name": "",
        "title": "",
        "headline": "",
        "company": "",
        "company_description": "",
        "email": "",
        "mobile_no": "",
        "website": "",
        "facebook": "",
        "instagram": "",
        "twitter": "",
        "linkedin": "",
    })
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
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
                            onClick={() => setData({ ...data, template: 0 })}
                            className={`${data.template === 0 ? "bg-black text-white" : ""} border-2 px-4 text-base py-1 tracking-widest rounded-lg`}>
                            Simple
                        </button>
                        <button
                            onClick={() => setData({ ...data, template: 1 })}
                            className={`${data.template === 1 ? "bg-black text-white" : ""} border-2 px-4 text-base py-1 tracking-widest rounded-lg`}>
                            Modern
                        </button>
                        {
                            profile?.premium ?
                                <button
                                    disabled={!profile?.premium}
                                    onClick={() => setData({ ...data, template: 2 })}
                                    className={`${data.template === 2 ? "bg-black text-white" : ""} flex items-center border-2 px-4 text-base py-1 tracking-widest rounded-lg`}>
                                    Art
                                </button>
                                :
                                <button
                                    disabled={!profile?.premium}
                                    onClick={() => setData({ ...data, template: 2 })}
                                    className={`${data.template === 2 ? "bg-black text-white" : ""} flex items-center border-2 px-4 text-base py-1 tracking-widest rounded-lg`}>
                                    Art <LuCrown size={20} color='#FFD700' />
                                </button>
                        }
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
                            <div class="flex flex-row items-center">
                                <input
                                    type="file"
                                    id="custom-input"
                                    onChange={handleChange}
                                    hidden
                                />
                                <label
                                    for="custom-input"
                                    className="block text-sm text-gray-400 mr-4 py-2 px-4
                                        rounded-md  font-medium border-2
                                        cursor-pointer"
                                >
                                    Choose file
                                </label>
                                <label class="text-[10px] text-black">{selectedFile?.name}</label>
                            </div>
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
                                value={data?.mobile_no}
                                onChange={(e) => {
                                    setData({ ...data, mobile_no: e.target.value })
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
                                value={data?.company_description}
                                onChange={(e) => {
                                    setData({ ...data, company_description: e.target.value })
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
                                value={data?.facebook}
                                onChange={(e) => {
                                    setData({ ...data, facebook: e.target.value })
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
                                value={data?.instagram}
                                onChange={(e) => {
                                    setData({ ...data, instagram: e.target.value })
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
                                value={data?.linkedin}
                                onChange={(e) => {
                                    setData({ ...data, linkedin: e.target.value })
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
                                value={data?.twitter}
                                onChange={(e) => {
                                    setData({ ...data, twitter: e.target.value })
                                }}
                                placeholder='Twitter Page Link'
                                className='border-2 ml-4 w-[88%] py-2 rounded-md pl-2'
                            />
                        </div>

                    </div>
                    <button
                        onClick={() => {
                            data["photo"] = selectedFile
                            console.log(data)
                            dispatch(AddCardAction(data, setLoading))
                        }}
                        disabled={loading}
                        className=' bg-black mt-5 tracking-wider flex justify-center items-center w-full lg:w-[450px] py-2 text-white font-semibold rounded-lg '>
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
                                "Save Card"
                        }
                    </button>
                </div>
                <div className='lg:w-[30%] w-full  '>
                    <h2 className="font-black text-center lg:text-left text-3xl tracking-widest py-5  text-black font-fira">
                        Preview
                    </h2>
                    <div className="border-2 overflow-y-scroll h-[600px] w-full rounded-lg ">
                        <Preview data={data} url={file} />
                    </div>
                </div>
            </div>
        </div>
    )
}
