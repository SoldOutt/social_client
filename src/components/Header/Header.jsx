import React, { Fragment, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import MessageIcon from '@mui/icons-material/Message'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
    const [searchState, setSearchState] = useState('')
    const [newFriends, setNewFriends] = useState([1, 2, 3])
    const [newMessage, setnewMessage] = useState([])
    const [newNotifications, setnewNotifications] = useState([1, 2])
    const [userMenu, setUserMenu] = useState(false)
    return (
        <Fragment>
            <div className="header">
                <div className="header_logo">
                    <h1>
                        <Link to="/">FakeBook</Link>
                    </h1>
                </div>
                <div className="header_search">
                    <div className="form_search">
                        <SearchIcon></SearchIcon>
                        <input
                            type="text"
                            value={searchState}
                            onChange={(event) => {
                                setSearchState(event.target.value)
                            }}
                            placeholder="Search for post"
                        />
                    </div>
                    <a href="">Homepage</a>
                </div>
                <div className="header_nav">
                    <div
                        className={`header_nav-item ${
                            newFriends.length !== 0 ? 'active' : ''
                        }`}
                    >
                        {newFriends.length !== 0 && (
                            <div className="header_nav-item--num">
                                {newFriends.length}
                            </div>
                        )}

                        <PersonIcon></PersonIcon>
                    </div>
                    <div
                        className={`header_nav-item ${
                            newMessage.length !== 0 ? 'active' : ''
                        }`}
                    >
                        {newMessage.length !== 0 && (
                            <div className="header_nav-item--num">
                                {newMessage.length}
                            </div>
                        )}
                        <MessageIcon></MessageIcon>
                    </div>
                    <div
                        className={`header_nav-item ${
                            newNotifications.length !== 0 ? 'active' : ''
                        }`}
                    >
                        {NotificationsIcon.length !== 0 && (
                            <div className="header_nav-item--num">
                                {newNotifications.length}
                            </div>
                        )}

                        <NotificationsIcon></NotificationsIcon>
                    </div>
                    <div className={`header_nav-item `}>
                        <AccountCircle
                            onClick={() => {
                                setUserMenu(!userMenu)
                            }}
                        ></AccountCircle>
                        {userMenu && (
                            <div className="header_nav-child">
                                <ul className="">
                                    <li>
                                        <Link to="/profile">My profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Log out</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
