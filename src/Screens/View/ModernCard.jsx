import React from 'react'
import { development_imgurl } from '../../Helper/Helper'
import { IMAGE } from '../../Components/Image'
import { IoPersonAddOutline, IoShareSocialSharp } from "react-icons/io5";
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ModernCard({
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
      className="flex flex-col relative items-center w-full bg-black h-full  font-fira"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundImage: view ? `url(${url})` : `url(${development_imgurl + card.photo})`,
          backgroundSize: "100% 100%",
          width: "100%",
          height: "70vh",
          objectFit: "contain",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(1)",
        }}
      >
        <div className='w-full opacity-70 bg-black'>
        <h2 className="font-bold px-6 w-full text-6xl pt-5 text-white">
          {card?.name}
        </h2>
        <h2 className="text-lg pt-2 px-6 tracking-wide text-white">
          {card?.headline}
        </h2>
        </div>
        
        {/* <div className=' opacity-80 bg-black w-[100vw] h-10'/> */}
      </div>
      <div className="flex justify-start w-full items-start space-x-4 py-5 px-5">
        <button
          onClick={() => {
            window.open(card?.facebook)
          }}
          className='bg-white flex justify-center items-center h-[60px] w-[60px] rounded-full'>
          <img
            className="h-[40px] w-[40px] text-black "
            src={IMAGE.facebook}
            alt="fb"
          />
        </button>
        <button
          onClick={() => {
            window.open(card?.instagram)
          }}
          className='bg-white flex justify-center items-center h-[60px] w-[60px] rounded-full'>
          <img
            className="h-[40px] w-[40px] text-black "
            src={IMAGE.instagram}
            alt="fb"
          />
        </button>
        <button
          onClick={() => {
            window.open(card?.linkedin)
          }}
          className='bg-white flex justify-center items-center h-[60px] w-[60px] rounded-full'>
          <img
            className="h-[40px] w-[40px] text-black "
            src={IMAGE.linkedin}
            alt="fb"
          />
        </button>
        <button
          onClick={() => {
            window.open(card?.twitter)
          }}
          className='bg-white flex justify-center items-center h-[60px] w-[60px] rounded-full'>
          <img
            className="h-[40px] w-[40px] text-black "
            src={IMAGE.twitter}
            alt="fb"
          />
        </button>
        <button
          onClick={() => {
            window.open(card?.website)
          }}
          className='bg-white flex justify-center items-center h-[60px] w-[60px] rounded-full'>
          <img
            className="h-[40px] w-[40px] text-black "
            src={IMAGE.web}
            alt="fb"
          />
        </button>
      </div>
      <div className='w-[88%] flex flex-col items-center rounded-lg  mb-2'>
        <h2 className="font-bold  w-full text-2xl self-center  text-white">
          About {card?.company}
        </h2>
        <h2 className=" text-sm text-gray-200 text-justify pt-3 pb-[60px] ">
          {card?.company_description}
        </h2 >
      </div>
      <div className={`${view ? "absolute" : "fixed"} bottom-2 flex justify-between w-full px-3`} >
        <div className='flex space-x-2'>
          <a
            href={`tel:${card?.mobile_no}`}

            className='bg-white flex justify-center items-center h-[60px] w-[60px] rounded-full'>
            <img
              className="h-[25px] w-25px] text-black "
              src={IMAGE.telephone}
              alt="fb"
            />
          </a>
          <a
            href={`mailto:${card?.email}`}
            className='bg-white flex justify-center items-center h-[60px] w-[60px] rounded-full'>
            <img
              className="h-[25px] w-25px] text-black "
              src={IMAGE.mail}
              alt="fb"
            />
          </a>
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
            className='bg-white flex justify-center items-center h-[60px] w-[60px] rounded-full'>

            {
              loading ?
                <ThreeDots
                  visible={true}
                  height="30"
                  width="20"
                  color="#000"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
                :
                <IoShareSocialSharp
                  size={25}
                />
            }

          </button>
        </div>

        <button
          id='save-btn'
          onClick={() => {
            saveInfo()
          }}
          className='bg-white  flex justify-between items-center h-[60px] px-1 w-[150px] rounded-full'>
          <h2 className="font-bold text-base  pl-4  text-black">
            Add to <br /> Contact
          </h2>
          <div
            className='border-2  flex justify-center items-center h-[55px] w-[55px] rounded-full'>
            <IoPersonAddOutline
              size={25}
            />
          </div>
        </button>
      </div>
    </div>
  )
}
