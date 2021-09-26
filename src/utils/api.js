import axios from 'axios'
const url = 'http://localhost:7000'
export const login = async (data) => {
    const res = await axios.post(`${url}/auth/login`, data)
    return res
}
export const register = async (data) => {
    const res = await axios.post(`${url}/auth/register`, data)
    return res
}
export const updateUser = async (idUser, data) => {
    const res = await axios.put(`${url}/user/${idUser}`, data)
    return res
}
export const getUser = async (idUser) => {
    const res = await axios.get(`${url}/user/${idUser}`)
    return res
}
export const deleteUser = async (idUser, data) => {
    const res = await axios.delete(`${url}/user/${idUser}`, data)
    return res
}
export const followUser = async (idUser, data) => {
    const res = await axios.put(`${url}/user/${idUser}/follow`, data)
    return res
}
export const unfollowUser = async (idUser, data) => {
    const res = await axios.delete(`${url}/user/${idUser}/follow`, data)
    return res
}
export const createPost = async (data) => {
    const res = await axios.post(`${url}/post`, data)
    return res
}
export const updatePost = async (idPost, data) => {
    const res = await axios.put(`${url}/post/${idPost}`, data)
    return res
}
export const getPost = async (idPost) => {
    const res = await axios.get(`${url}/post/${idPost}`)
    return res
}
export const deletePost = async (idPost) => {
    const res = await axios.delete(`${url}/post/${idPost}`)
    return res
}
export const likePost = async (idPost) => {
    const res = await axios.put(`${url}/post/${idPost}/like`)
    return res
}
export const getTimeline = async () => {
    const res = await axios.get(`${url}/post/timeline`)
    return res
}
