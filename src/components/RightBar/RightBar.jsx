import React, { Fragment, useState } from 'react'
import avatar from '../../assets/avatar.jpg'
import './RightBar.scss'
const RightBar = () => {
    const [friendsState, setFriendsState] = useState([
        {
            username: 'Nguyễn Văn Nam',
            img: avatar,
        },
        {
            username: 'Nguyễn Văn Nam',
            img: avatar,
        },
        {
            username: 'Nguyễn Văn Nam',
            img: avatar,
        },
        {
            username: 'Nguyễn Văn Nam',
            img: avatar,
        },
        {
            username: 'Nguyễn Văn Nam',
            img: avatar,
        },
    ])
    return (
        <Fragment className="rightBar">
            <div className="rightBar">
                <div className="friend">
                    <h3>Bạn bè </h3>
                    {friendsState.map((item, idx) => {
                        return (
                            <div className="friend_item">
                                <div className="friend_item-img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <h3>{item.username}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default RightBar
