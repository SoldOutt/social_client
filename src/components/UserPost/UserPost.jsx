import React, { Fragment, useState } from 'react'
import avatar from '../../assets/avatar.jpg'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import './UserPost.scss'
import { Button } from '@mui/material'
const UserPost = () => {
    const [postState, setPostState] = useState({
        desc: '',
        img: '',
    })
    return (
        <Fragment>
            <div className="userPost">
                <form action="">
                    <div className="form_group">
                        <img src={avatar} alt="anh dai dien" />
                        <div className="form_input">
                            <textarea
                                placeholder="What are you doing?"
                                value={postState.desc}
                                onChange={(e) => {
                                    setPostState({
                                        ...postState,
                                        desc: e.target.value,
                                    })
                                }}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="form_group">
                        <div className="form_group-select">
                            <PhotoLibraryIcon
                                style={{ color: 'red' }}
                            ></PhotoLibraryIcon>
                            <span>Photo or video</span>
                        </div>
                        <div className="form_group-select">
                            <LabelImportantIcon
                                style={{ color: 'blue' }}
                            ></LabelImportantIcon>
                            <span>Photo or video</span>
                        </div>
                        <div className="form_group-select">
                            <LocationOnIcon
                                style={{ color: 'green' }}
                            ></LocationOnIcon>
                            <span>Photo or video</span>
                        </div>
                        <div className="form_group-select">
                            <EmojiEmotionsIcon
                                style={{ color: 'yellow' }}
                            ></EmojiEmotionsIcon>
                            <span>Photo or video</span>
                        </div>
                        <div className="form_group-select">
                            <Button variant="contained">Post</Button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default UserPost
