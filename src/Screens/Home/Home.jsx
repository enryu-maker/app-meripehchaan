import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from './HomeComp/Dashboard'
import Activity from './HomeComp/Activity'
import Card from './HomeComp/Card'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
export default function Home() {
    const navigate = useNavigate()
    const profile = useSelector(state => state.Reducers.profile)
    const cards = useSelector(state => state.Reducers.cards)

    const [active, setActive] = React.useState(0)
    function handleClick(active) {
        switch (active) {
            case 0:
                return <Dashboard data={cards} />
            case 1:
                return <Activity premium={profile?.premium} />
            case 2:
                return <Card premium={profile?.premium} />
        }
    }

    return (
        <div
            className='w-full font-fira flex flex-col justify-center items-center bg-white '
        >
            <Helmet>
                <title>Meri Pehchaan - Digital Card Platform</title>
                <meta name="description" content="Discover the convenience of digital cards with Meri Pehchaan. Create, manage, and share your digital identity effortlessly." />
                <meta name="keywords" content="digital cards, digital identity, Meri Pehchaan, online identity management" />
            </Helmet>
            <h2 className="font-black lg:w-[83%] w-[88%] self-center text-xl tracking-widest lg:text-4xl  text-black font-fira mt-10 ">
                {`Welcome Back, ${profile?.name}!`}
            </h2>
            <div
                className='lg:w-[83%] w-[88%] flex items-center justify-evenly lg:justify-start space-x-5  mt-8 border-b-2 pb-[13px]'>
                <button
                    onClick={() => setActive(0)}
                    className={`${active === 0 ? "text-black font-bold underline-offset-[20px] underline" : "text-gray-400 font-medium"} tracking-widest text-base`}
                >
                    Dashboard
                </button>
                <button
                    onClick={() => setActive(1)}
                    className={`${active === 1 ? "text-black font-bold underline-offset-[20px] underline" : "text-gray-400 font-medium"} tracking-widest text-base`}
                >
                    Activity
                </button>
                <button
                    onClick={() => setActive(2)}
                    className={`${active === 2 ? "text-black font-bold underline-offset-[20px] underline" : "text-gray-400 font-medium"} tracking-widest text-base`}
                >
                    Visiting cards
                </button>
            </div>
            {handleClick(active)}
        </div>
    )
}
