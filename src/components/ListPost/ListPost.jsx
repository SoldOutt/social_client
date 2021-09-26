import React, { Fragment, useState, useContext, useEffect } from 'react'
import PostUp from '../PostUp/PostUp'
import './ListPost.scss'
import { PostContext } from '../../contexts/PostContext'
const ListPost = () => {
    const { postState, newFeed } = useContext(PostContext)
    useEffect(async () => {
        await newFeed()
    }, [])
    return (
        <Fragment>
            <div className="feed_post">
                {postState.map((item, idx) => {
                    return <PostUp key={idx} post={item}></PostUp>
                })}
            </div>
        </Fragment>
    )
}

export default ListPost
