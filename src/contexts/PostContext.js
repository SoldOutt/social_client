import { createContext, useState } from 'react'
import { getTimeline } from '../utils/api'
export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
    const [postState, setPostState] = useState([])
    const newFeed = async () => {
        try {
            const res = await getTimeline()
            console.log(res)

            setPostState(res.data.postTimeline)
            return { success: true, data: res.data }
        } catch (error) {
            console.log(error)
            return { success: false, message: error.message }
        }
    }

    const postContextData = { newFeed, postState }
    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}
export default PostContextProvider
