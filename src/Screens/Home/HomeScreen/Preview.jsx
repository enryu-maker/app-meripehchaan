import React from 'react'
import { IMAGE } from '../../../Components/Image'
export default function Preview({
    data
}) {
    return (
        <div
            className="flex flex-col  items-center py-5"
        >
            <img
                className=" h-[150px] w-[150px] object-cover rounded-full"
                src="https://res.cloudinary.com/terieyenike/image/upload/c_thumb,g_face,w_317/v1637140050/calm_teri_b3eziq.jpg"
                lazy="true"
                alt="user"
            />
            <h2 className="font-bold text-2xl pt-5 text-black">
                {data?.name}
            </h2>
            <h2 className="text-base pt-2 tracking-wide text-gray-500">
                {data?.headline}
            </h2>
            <div
                className="flex mt-5 justify-around items-center w-full ">
                <button
                    id="save-btn"
                    onClick={() => {
                    }}
                    className=" bg-gray-200 w-[40%] font-semibold text-base py-2 rounded-lg">
                    Save to Contacts
                </button>
                <button
                    className=" bg-black w-[40%] font-semibold text-base text-white py-2  rounded-lg ">
                    Share
                </button>
            </div>
            {
                data?.company_desc ?
                    <section
                        className="w-[88%]"
                    >
                        <h2 className="font-bold text-lg pt-5 text-black">
                            About Company
                        </h2>
                        <div
                            className="flex justify-start items-center mt-2"
                        >
                            <div
                                className="flex justify-center items-start flex-col"
                            >
                                <h2 className="font-bold text-base text-black  ">
                                    {data?.company}
                                </h2>
                                <h2 className=" text-sm text-gray-500 text-justify pt-3  ">
                                    {data?.company_desc}
                                </h2 >
                            </div>

                        </div>
                    </section>
                    : null
            }
            <section
                className="w-[88%]"
            >
                <h2 className="font-bold text-lg pt-5 text-black">
                    About Me
                </h2>
                <div
                    className="flex justify-start items-center mt-5"
                >
                    <div
                        className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                    >
                        <img
                            className="h-[20px] w-[20px] text-black "
                            src={IMAGE.bag}
                            alt="bag"
                        />
                    </div>
                    <div
                        className="flex justify-center items-start flex-col mx-3"
                    >
                        <h2 className="font-bold text-sm text-black  ">
                            {data?.title}
                        </h2>
                        <h2 className="font-bold text-sm text-gray-500  ">
                            {data?.company}
                        </h2 >
                    </div>

                </div>
            </section>
            <section
                className="w-[88%]"
            >
                <h2 className="font-bold text-lg pt-5 text-black">
                    Contacts
                </h2>
                <div
                    className="flex justify-start items-center mt-5"
                >
                    <div
                        className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                    >
                        <img
                            className="h-[20px] w-[20px] text-black "
                            src={IMAGE.mail}
                            alt="mail"
                        />
                    </div>
                    <div
                        className="flex justify-center items-start flex-col mx-3"
                    >
                        <a
                            href={`mailto:${data?.email}`}
                            className="font-bold text-sm text-black  ">
                            {data?.email}
                        </a>
                        <h2 className="font-semibold text-sm text-gray-500  ">
                            Office
                        </h2 >
                    </div>
                </div>
                <div
                    className="flex justify-start items-center mt-5"
                >
                    <div
                        className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                    >
                        <img
                            className="h-[20px] w-[20px] text-black "
                            src={IMAGE.telephone}
                            alt="phone"
                        />
                    </div>
                    <div
                        className="flex justify-center items-start flex-col mx-3"
                    >
                        <a
                            href={`tel:${data?.phone}`}
                            className="font-bold text-sm text-black  ">
                            {data?.phone}
                        </a>
                        <h2 className="font-semibold text-sm text-gray-500  ">
                            Office
                        </h2 >
                    </div>
                </div>
                <div
                    className="flex justify-start items-center mt-5"
                >
                    <div
                        className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                    >
                        <img
                            className="h-[20px] w-[20px] text-black "
                            src={IMAGE.web}
                            alt="phone"
                        />
                    </div>
                    <div
                        className="flex justify-center items-start flex-col mx-3"
                    >
                        <a
                            href={`tel:${data?.website}`}
                            className="font-bold text-sm text-black  ">
                            {data?.website}
                        </a>
                        <h2 className="font-semibold text-sm text-gray-500  ">
                            Office
                        </h2 >
                    </div>
                </div>
            </section>
            <section
                className="w-[88%]"
            >
                <h2 className="font-bold text-lg pt-5 text-black">
                    Social Links
                </h2>
                <div
                    className="flex justify-start items-center mt-5"
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
                    <div
                        className="flex justify-center items-start flex-col mx-3"
                    >
                        <h2 className="font-bold text-sm text-black  ">
                            Facebook
                        </h2>
                        <h2 className="font-semibold text-sm text-gray-500  ">
                            {data?.fb_link}
                        </h2 >
                    </div>
                </div>
                <div
                    className="flex justify-start items-center mt-5"
                >
                    <div
                        className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                    >
                        <img
                            className="h-[20px] w-[20px] text-black "
                            src={IMAGE.instagram}
                            alt="insta"
                        />
                    </div>
                    <div
                        className="flex justify-center items-start flex-col mx-3"
                    >
                        <h2 className="font-bold text-sm text-black  ">
                            Instagram
                        </h2>
                        <h2 className="font-semibold text-sm text-gray-500  ">
                            {data?.insta_link}
                        </h2 >
                    </div>
                </div>
                <div
                    className="flex justify-start items-center mt-5"
                >
                    <div
                        className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                    >
                        <img
                            className="h-[20px] w-[20px] text-black "
                            src={IMAGE.linkedin}
                            alt="linkedin"
                        />
                    </div>
                    <div
                        className="flex justify-center items-start flex-col mx-3"
                    >
                        <h2 className="font-bold text-sm text-black  ">
                            Linkedin
                        </h2>
                        <h2 className="font-semibold text-sm text-gray-500  ">
                            {data?.linkdein_link}
                        </h2 >
                    </div>
                </div>
                <div
                    className="flex justify-start items-center mt-5"
                >
                    <div
                        className="h-[45px] w-[45px] rounded-lg  bg-gray-200 flex justify-center items-center"
                    >
                        <img
                            className="h-[20px] w-[20px] text-black "
                            src={IMAGE.twitter}
                            alt="tweet"
                        />
                    </div>
                    <div
                        className="flex justify-center items-start flex-col mx-3"
                    >
                        <h2 className="font-bold text-sm text-black  ">
                            Twitter
                        </h2>
                        <h2 className="font-semibold text-sm text-gray-500  ">
                            {data?.twitter_link}
                        </h2 >
                    </div>
                </div>
            </section>

        </div>
    )
}
