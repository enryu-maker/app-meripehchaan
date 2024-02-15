import React from 'react'
import { IMAGE } from '../../Components/Image';
import { ThreeDots } from 'react-loader-spinner';
import { development_imgurl } from '../../Helper/Helper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SimpleCard({
    card,
    url = true,
    view = false,
}) {
    const [loading, setLoading] = React.useState(false)
    function saveInfo() {
        var saveBtn = document.getElementById("save-btn");
        saveBtn.addEventListener("click", function () {
            // Get the contact information from the website
            var contact = {
                name: card?.name,
                phone: card?.mobile_no,
                email: card?.email
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
            className="flex flex-col lg:hidden  items-center py-5"
        >
            <img
                className=" h-[150px] w-[150px] object-cover rounded-full"
                src={view? url : development_imgurl + card?.photo }
                lazy="true"
                alt="user"
            />
            <h2 className="font-bold text-2xl pt-5 text-black">
                {card?.name}
            </h2>
            <h2 className="text-base pt-2 tracking-wide text-gray-500">
                {card?.headline}
            </h2>
            <div
                className="flex mt-5 justify-around items-center w-full ">
                <button
                    id="save-btn"
                    onClick={() => {
                        saveInfo()
                    }}
                    className=" bg-gray-200 w-[40%] font-semibold text-base py-2 rounded-lg">
                    Save to Contacts
                </button>
                <button
                    onClick={async () => {
                        setLoading(true)
                        window.focus();
                        await navigator.clipboard.writeText(card?.share)
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
                        }, 2000)
                    }}
                    disabled={loading}
                    className=" bg-black w-[40%] flex justify-center items-center font-semibold text-base text-white py-2  rounded-lg ">
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
                            "Share"
                    }
                </button>

            </div>
            {
                card?.company_description ?
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
                                    {card?.company}
                                </h2>
                                <h2 className=" text-sm text-gray-500 text-justify pt-3  ">
                                    {card?.company_description}
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
                            {card?.title}
                        </h2>
                        <h2 className="font-bold text-sm text-gray-500  ">
                            {card?.company}
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
                            href={`mailto:${card?.email}`}
                            className="font-bold text-sm text-black  ">
                            {card?.email}
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
                            href={`tel:${card?.mobile_no}`}
                            className="font-bold text-sm text-black  ">
                            {card?.mobile_no}
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
                            href={`tel:${card?.website}`}
                            className="font-bold text-sm text-black  ">
                            {card?.website}
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
                        <a
                            onClick={() => {
                                window.open(card?.facebook)
                            }}
                            className="font-bold text-sm text-black  ">
                            Facebook
                        </a>
                        <h2 className="font-medium text-[8px] lg:text-sm overflow-hidden  text-gray-500  ">
                            {card?.facebook}
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
                        <a
                            onClick={() => {
                                window.open(card?.instagram)
                            }}
                            className="font-bold text-sm text-black  ">
                            Instagram
                        </a>
                        <h2 className="font-medium text-[8px] lg:text-sm overflow-hidden  text-gray-500  ">
                            {card?.instagram}
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
                        <a
                            onClick={() => {
                                window.open(card?.linkedin)
                            }}
                            className="font-bold text-sm text-black  ">
                            Linkedin
                        </a>
                        <h2 className="font-medium text-[8px] lg:text-sm overflow-hidden  text-gray-500  ">
                            {card?.linkedin}
                        </h2 >
                    </div>
                </div>
                <div
                    className="flex justify-start items-center mt-5 "
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
                        <a
                            onClick={() => {
                                window.open(card?.twitter)
                            }}
                            className="font-bold text-sm text-black  ">
                            Twitter
                        </a>
                        <h2 className="font-medium text-[8px] lg:text-sm overflow-hidden  text-gray-500  ">
                            {card?.twitter}
                        </h2 >
                    </div>
                </div>
            </section>

        </div>
    )
}
