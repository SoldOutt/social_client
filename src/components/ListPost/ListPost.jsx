import React, { Fragment, useState } from 'react'
import PostUp from '../PostUp/PostUp'
import './ListPost.scss'

const ListPost = ({ postState }) => {
    return (
        <Fragment>
            <div className="feed_post">
                {postState.map((item, idx) => {
                    return <PostUp data={item}></PostUp>
                })}
            </div>
        </Fragment>
    )
}

export default ListPost
