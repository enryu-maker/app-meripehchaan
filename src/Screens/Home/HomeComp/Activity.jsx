import React from 'react'
import { LuCrown } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
export default function Activity({
    premium
}) {
    const navigate = useNavigate()
    const data = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            Views: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            Views: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            Views: 2290,
        },
        {
            name: 'April',
            uv: 2780,
            pv: 3908,
            Views: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            Views: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            Views: 2500,
        },
        {
            name: 'July',
            uv: 3490,
            pv: 4300,
            Views: 2100,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            Views: 2100,
        },
        {
            name: 'Sept',
            uv: 3490,
            pv: 4300,
            Views: 2100,
        },
        {
            name: 'Oct',
            uv: 3490,
            pv: 4300,
            Views: 2100,
        },
        {
            name: 'Nov',
            uv: 3490,
            pv: 4300,
            Views: 2100,
        },
        {
            name: 'Dec',
            uv: 3490,
            pv: 4300,
            Views: 2100,
        },
    ];

    return (
        <>
            <div
                className='lg:w-[83%] w-[88%] flex items-center justify-between mt-10 '>
                <h2 className="font-black text-xl tracking-widest lg:text-3xl  text-black font-fira">
                    Current Monthly Activity
                </h2>
            </div>
            {
                premium ?
                    <div className='flex lg:w-[83%] w-[88%] mt-10 justify-between items-center '>
                        <div
                            className='lg:h-[260px] flex flex-col py-4 lg:py-0 lg:flex-row justify-center items-center rounded-lg w-[500px] shadow-xl '
                        />
                        <LineChart
                            width={600}
                            height={260}
                            data={data}
                            className=' shadow-lg rounded-lg '
                            margin={{
                                top: 10,
                                right: 10
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Views" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </div>
                    :
                    <div
                        className='flex flex-col items-start  lg:w-[83%] w-[88%] mt-10  '
                    >
                        <h2 className="font-black flex items-center self-left text-base tracking-widest lg:text-2xl  text-black font-fira ">
                            Upgrade to Premium &nbsp; <LuCrown className=' text-[#FFD700]' />
                        </h2>
                        <button
                            onClick={() => {
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
