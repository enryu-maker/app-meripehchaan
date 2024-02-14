import React from 'react'
import { Route, Routes } from 'react-router-dom'
import View from '../Screens/View/View'
import Login from '../Screens/Auth/Login'
import Register from '../Screens/Auth/Register'
import Forgot from '../Screens/Auth/Forgot'
import Otp from '../Screens/Auth/Otp'
import Navbar from '../Components/Navbar'
import Reset from '../Screens/Auth/Reset'

export default function AuthNav() {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/share/:id/:token/:name' element={<View />} />
            <Route path='/otp' element={<Otp />} />
            <Route path='/reset-password/:id/:token' element={<Reset />} />
        </Routes>
        </>
    )
}
