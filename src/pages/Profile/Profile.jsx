import React, { Fragment, useState } from 'react'
import Header from '../../components/Header/Header'
import ListPost from '../../components/ListPost/ListPost'
import SideBar from '../../components/SideBar/SideBar'
import postImg from '../../assets/postImg.jpg'
import avatar from '../../assets/avatar.jpg'
import anhnen from '../../assets/anhnen.jpg'
import UserPost from '../../components/UserPost/UserPost'
import './Profile.scss'
const Profile = () => {
    const [userState, setUserState] = useState({
        username: 'Nguyễn Văn Nam',
        desc: 'Hello everyone',
        posts: [
            {
                img: avatar,
                updatedAt: '5 mins ago',
                post: {
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores, voluptas animi expedita quos consequuntur! Adipisci hic esse, expedita tenetur debitis laudantium quisquam aliquid aut incidunt aspernatur nobis exercitationem natus?',
                    img: postImg,
                    likes: [],
                },
            },
            {
                img: avatar,
                updatedAt: '5 mins ago',
                post: {
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores, voluptas animi expedita quos consequuntur! Adipisci hic esse, expedita tenetur debitis laudantium quisquam aliquid aut incidunt aspernatur nobis exercitationem natus?',
                    img: postImg,
                    likes: [1, 2, 3, 4],
                },
            },
            {
                img: avatar,
                updatedAt: '5 mins ago',
                post: {
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores, voluptas animi expedita quos consequuntur! Adipisci hic esse, expedita tenetur debitis laudantium quisquam aliquid aut incidunt aspernatur nobis exercitationem natus?',
                    img: '',
                    likes: [],
                },
            },
            {
                img: avatar,
                updatedAt: '5 mins ago',
                post: {
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores, voluptas animi expedita quos consequuntur! Adipisci hic esse, expedita tenetur debitis laudantium quisquam aliquid aut incidunt aspernatur nobis exercitationem natus?',
                    img: postImg,
                    likes: [],
                },
            },
        ],
    })
    return (
        <Fragment>
            <Header></Header>
            <div className="profile">
                <SideBar></SideBar>
                <div className="profile_contain">
                    <div className="profile_header">
                        <div className="profile_bg">
                            <img src={anhnen} alt="" />
                        </div>
                        <div className="profile_avatar">
                            <img src={avatar} alt="" />
                            <h3>{userState.username}</h3>
                        </div>
                    </div>
                    <UserPost></UserPost>
                    <ListPost postState={userState.posts}></ListPost>
                </div>
            </div>
        </Fragment>
    )
}

export default Profile
