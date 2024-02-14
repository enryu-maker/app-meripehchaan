import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../Screens/Home/Home'
import Header from '../Components/Header'
import NewCard from '../Screens/Home/HomeScreen/NewCard'
import Profile from '../Screens/Home/Profile'
import Upgrade from '../Screens/Home/Upgrade'
import Settings from '../Screens/Home/Settings'
import { useDispatch } from 'react-redux'
import { GetProfileAction } from '../Store/actions'
import View from '../Screens/View/View'

export default function HomeNav() {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        dispatch(GetProfileAction(setLoading))
    }, [dispatch])
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Navigate to={"/home"} />} />
                <Route path='/home' element={<Home />} />
                <Route path='/create-new-card' element={<NewCard />} />
                <Route path='/upgrade' element={<Upgrade />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/share/:id/:token/:name' element={<View />} />
            </Routes>
        </>
    )
}
