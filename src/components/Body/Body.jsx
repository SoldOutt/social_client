import React, { Fragment } from 'react'
import SideBar from '../SideBar/SideBar'
import RightBar from '../RightBar/RightBar'
import Feed from '../Feed/Feed'
import './Body.scss'
const Body = () => {
    return (
        <Fragment>
            <div className="body">
                <SideBar></SideBar>
                <Feed></Feed>
                <RightBar></RightBar>
            </div>
        </Fragment>
    )
}

export default Body
