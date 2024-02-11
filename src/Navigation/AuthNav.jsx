import React from 'react'
import { Route, Routes } from 'react-router-dom'
import View from '../Screens/View/View'
import Login from '../Screens/Auth/Login'
import Register from '../Screens/Auth/Register'
import Forgot from '../Screens/Auth/Forgot'
import Otp from '../Screens/Auth/Otp'
import Navbar from '../Components/Navbar'

export default function AuthNav() {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/view' element={<View />} />
            <Route path='/otp' element={<Otp />} />
        </Routes>
        </>
    )
}
