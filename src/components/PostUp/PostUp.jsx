import React, { Fragment, useState } from 'react'
import './PostUp.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import avatar from '../../assets/avatar.jpg'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
const PostUp = ({ data }) => {
    const { username, time, img, post } = data
    return (
        <Fragment>
            <div className="post_up">
                <div className="post_up--header">
                    <div className="user">
                        <div className="user_img">
                            <img src={avatar} alt="anhdaidien" />
                        </div>
                        <div className="user_post_inf">
                            <div className="user_name">Nguyễn Văn Nam</div>
                            <div className="time">5 mins ago</div>
                        </div>
                    </div>
                    <button>
                        <MoreVertIcon></MoreVertIcon>
                    </button>
                </div>
                <div className="post_up-contain">
                    <div className="desc">{post.desc}</div>
                    {post.img && <img src={post.img} alt="anh bai viet"></img>}
                </div>
                <div className="post_up-interact">
                    <div className="react">
                        <ThumbUpIcon style={{ color: 'blue' }}></ThumbUpIcon>
                        <FavoriteIcon style={{ color: 'red' }}></FavoriteIcon>
                        {post.likes.length} people like it
                    </div>
                    <div className="action">
                        <div className="like action_icon">
                            <ThumbUpAltOutlinedIcon></ThumbUpAltOutlinedIcon>{' '}
                            Like
                        </div>
                        <div className="like action_icon">
                            <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>{' '}
                            Comment
                        </div>
                    </div>
                </div>
                {/* <div className="post_up-comment">
                    
                </div> */}
            </div>
        </Fragment>
    )
}

export default PostUp
