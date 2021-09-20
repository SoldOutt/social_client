import React, { Fragment, useState } from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import GroupIcon from '@mui/icons-material/Group'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import EventIcon from '@mui/icons-material/Event'
import UserPost from '../UserPost/UserPost'
import './Feed.scss'
const Feed = () => {
    return (
        <Fragment>
            <div className="feed">
                <UserPost></UserPost>
            </div>
        </Fragment>
    )
}

export default Feed
