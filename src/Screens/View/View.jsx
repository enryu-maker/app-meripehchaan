import React from 'react'
import { IMAGE } from '../../Components/Image';
export default function View() {
    function saveInfo() {
        var saveBtn = document.getElementById("save-btn");
        saveBtn.addEventListener("click", function () {
            // Get the contact information from the website
            var contact = {
                name: "John Smith",
                phone: "555-555-5555",
                email: "john@example.com"
            };
            // create a vcard file
            var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
            var blob = new Blob([vcard], { type: "text/vcard" });
            var url = URL.createObjectURL(blob);

            const newLink = document.createElement('a');
            newLink.download = contact.name + ".vcf";
            newLink.textContent = contact.name;
            newLink.href = url;

            newLink.click();
        });
    }

    return (
        <div
            className="flex flex-col justify-center items-center w-full mt-10"
        >
            <img
                className="w-[150px] h-[150px] object-cover rounded-full"
                src="https://res.cloudinary.com/terieyenike/image/upload/c_thumb,g_face,w_317/v1637140050/calm_teri_b3eziq.jpg"
                lazy="true"
                alt="user"
            />
            <h2 className="font-bold text-2xl pt-5 text-black">
                Faisal Kadri
            </h2>
            <h2 className="text-base pt-2 tracking-wide text-gray-500">
                Director at Publikcity Media Private Limited
            </h2>
            <div
                className="flex mt-5 justify-around items-center w-full lg:w-[45%]">
                <button
                    id="save-btn"
                    onClick={() => {
                        saveInfo()
                    }}
                    className=" bg-gray-200 w-[40%] font-semibold text-base py-2 rounded-lg">
                    Save to Contacts
                </button>
                <button
                    className=" bg-blue-500 w-[40%] font-semibold text-base text-white py-2  rounded-lg ">
                    Share
                </button>
            </div>
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
                            Publikcity Media Private Limited
                        </h2>
                        <h2 className=" text-sm text-gray-500 text-justify pt-3  ">
                            Publikcity is a boutique technology, brand, design and marketing consulting company that caters to the needs of all kinds of businesses, regardless of size.
                            Our brand ethos is captured in Logo se logon tak which means that we endeavour to help businesses right from creating their brand identity to helping them reach their intended target audience. We seek to become an integral part of a businesses entire journey as their own team.
                            We use the power of creativity to transform businesses. Our expert team with diverse skillsets in designing, communication, technology and marketing will help create a professional digital infrastructure which is a key to success in this day and age.
                        </h2 >
                    </div>

                </div>
            </section>
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
                            Director
                        </h2>
                        <h2 className="font-bold text-sm text-gray-500  ">
                            Publikcity Media Private Limited
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
                            href="mailto:info@publikcitymedia.com"
                            className="font-bold text-sm text-black  ">
                            faisal.mpyc@gmail.com
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
                            href="tel:+966555555555"
                            className="font-bold text-sm text-black  ">
                            7020175764
                        </a>
                        <h2 className="font-semibold text-sm text-gray-500  ">
                            Office
                        </h2 >
                    </div>
                </div>
            </section>
            <section
                className="w-[88%] mb-5"
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
                            Office
                        </h2 >
                    </div>
                </div>
            </section>

        </div>
    )
}
