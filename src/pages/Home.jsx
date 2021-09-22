import React, { Fragment, useState } from 'react'
import Body from '../components/Body/Body'
import Feed from '../components/Feed/Feed'
import Header from '../components/Header/Header'
import RightBar from '../components/RightBar/RightBar'
import SideBar from '../components/SideBar/SideBar'
const Home = () => {
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
