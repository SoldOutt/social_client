import React, { Fragment, useState } from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import GroupIcon from '@mui/icons-material/Group'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import EventIcon from '@mui/icons-material/Event'
import avatar from '../../assets/avatar.jpg'
import './SideBar.scss'
const SideBar = () => {
    const [sideBarItems, setSideBarItems] = useState([
        { icon: RssFeedIcon, name: 'Feed' },
        { icon: ChatIcon, name: 'Chats' },
        { icon: PlayCircleFilledIcon, name: 'Videos' },
        { icon: GroupIcon, name: 'Groups' },
        { icon: BookmarkIcon, name: 'BookMarks' },
        { icon: HelpOutlineIcon, name: 'Question' },
        { icon: EventIcon, name: 'Event' },
    ])
    const [friendsState, setFriendsState] = useState([
        {
            name: 'Nguyễn Văn Nam',
            img: avatar,
        },
        {
            name: 'Nguyễn Văn Nam',
            img: avatar,
        },
        {
            name: 'Nguyễn Văn Nam',
            img: avatar,
        },
        {
            name: 'Nguyễn Văn Nam',
            img: avatar,
        },
        {
            name: 'Nguyễn Văn Nam',
            img: avatar,
        },
    ])
    return (
        <Fragment>
            <div className="sideBar">
                <div className="sideBar_nav">
                    {sideBarItems.map((item, idx) => (
                        <div className="sideBar_Item">
                            <item.icon></item.icon>
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="sideBar_user">
                    {friendsState.map((item, idx) => {
                        return (
                            <div className="sideBar_Item">
                                <img src={item.img} alt={item.name} />
                                <h3>{item.name}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default SideBar
