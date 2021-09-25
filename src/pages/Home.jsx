import React, { Fragment, useState } from 'react'
import Body from '../components/Body/Body'
import Feed from '../components/Feed/Feed'
import Header from '../components/Header/Header'
import RightBar from '../components/RightBar/RightBar'
import SideBar from '../components/SideBar/SideBar'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
const Home = () => {
    const { authState } = useContext(AuthContext)
    console.log(authState)
    return (
        <Fragment>
            <Header></Header>
            <div className="body">
                <SideBar></SideBar>
                <Feed></Feed>
                <RightBar></RightBar>
            </div>
        </Fragment>
    )
}

export default Home
