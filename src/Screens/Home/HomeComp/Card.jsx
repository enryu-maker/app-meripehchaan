import React from 'react';
import { LuCrown } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

export default function Card({
  premium
}) {
  const navigate = useNavigate()
  return (
    <>
      <div
        className='lg:w-[83%] w-[88%] flex items-center justify-between mt-10 '>
        <h2 className="font-black text-xl tracking-widest lg:text-3xl  text-black font-fira">
          My Card
        </h2>
      </div>
      {
        premium ?
          <div className='flex lg:w-[83%] w-[88%] mt-10 justify-between items-center '>
          </div>
          :
          <div
            className='flex flex-col items-start  lg:w-[83%] w-[88%] mt-10  '
          >
            <h2 className="font-black flex items-center self-left text-base tracking-widest lg:text-2xl  text-black font-fira ">
              Upgrade to Premium &nbsp; <LuCrown className=' text-[#FFD700]' />
            </h2>
            <button
              onClick={()=>{
                navigate('/upgrade')
              }}
              className='border-2 border-[#FFD700] mt-3 px-4 py-1 rounded-md font-bold text-black'
            >
              upgrade Now
            </button>
          </div>
      }
    </>
  )
}
