import React from 'react'
import { useSelector } from 'react-redux'
import AuthNav from './AuthNav'
import HomeNav from './HomeNav'

export default function Index() {
    const access = useSelector(state => state.Reducers.access)
    return (
        <>
            {
                access === null ? <AuthNav /> : <HomeNav />
            }
        </>

    )
}
