import React, { Fragment, useState } from 'react'
import PostUp from '../PostUp/PostUp'
import UserPost from '../UserPost/UserPost'
import avatar from '../../assets/avatar.jpg'
import postImg from '../../assets/postImg.jpg'
import './Feed.scss'
const Feed = () => {
    const [postState, setPostState] = useState([
        {
            username: 'Nguyễn Văn Nam',
            img: avatar,
            updatedAt: '5 mins ago',
            post: {
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores, voluptas animi expedita quos consequuntur! Adipisci hic esse, expedita tenetur debitis laudantium quisquam aliquid aut incidunt aspernatur nobis exercitationem natus?',
                img: postImg,
                likes: [],
            },
        },
        {
            username: 'Nguyễn Văn Nam',
            img: avatar,
            updatedAt: '5 mins ago',
            post: {
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores, voluptas animi expedita quos consequuntur! Adipisci hic esse, expedita tenetur debitis laudantium quisquam aliquid aut incidunt aspernatur nobis exercitationem natus?',
                img: postImg,
                likes: [1, 2, 3, 4],
            },
        },
        {
            username: 'Nguyễn Văn Nam',
            img: avatar,
            updatedAt: '5 mins ago',
            post: {
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores, voluptas animi expedita quos consequuntur! Adipisci hic esse, expedita tenetur debitis laudantium quisquam aliquid aut incidunt aspernatur nobis exercitationem natus?',
                img: '',
                likes: [],
            },
        },
        {
            username: 'Nguyễn Văn Nam',
            img: avatar,
            updatedAt: '5 mins ago',
            post: {
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asperiores, voluptas animi expedita quos consequuntur! Adipisci hic esse, expedita tenetur debitis laudantium quisquam aliquid aut incidunt aspernatur nobis exercitationem natus?',
                img: postImg,
                likes: [],
            },
        },
    ])
    return (
        <Fragment>
            <div className="feed">
                <UserPost></UserPost>
                <div className="feed_post">
                    {postState.map((item, idx) => {
                        return <PostUp data={item}></PostUp>
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Feed
