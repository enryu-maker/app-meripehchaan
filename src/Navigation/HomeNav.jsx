import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home/Home'
import Header from '../Components/Header'
import NewCard from '../Screens/Home/HomeScreen/NewCard'

export default function HomeNav() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/create-new-card' element={<NewCard />} />
            </Routes>
        </>

    )
}
