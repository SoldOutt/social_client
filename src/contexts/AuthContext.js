import { createContext, useState, useEffect, useReducer } from 'react'
import setAuthToken from '../utils/setAuthToken'
import { login, register, getUser } from '../utils/api'
export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        authLoading: true,
        isAuthenticated: false,
        user: null,
    })

    const loadUser = async () => {
        if (localStorage['tokenUser']) {
            setAuthState(localStorage['tokenUser'])
            setAuthState({
                ...authState,
                authLoading: false,
                isAuthenticated: true,
                user: localStorage['tokenUser'],
            })
        } else {
            setAuthState({
                ...authState,
                authLoading: false,
            })
        }
    }
    useEffect(() => loadUser(), [])
    const loginUser = async (data) => {
        try {
            const res = await login(data)
            if (res.data.success) {
                localStorage.setItem('tokenUser', res.data)

                setAuthToken(res.data.jwtSign)
                loadUser()
            }
            return { success: true, data: res.data }
        } catch (error) {
            console.log(error)
            return { success: false, message: error.message }
        }
    }
    const registerUser = async (data) => {
        try {
            const res = await register(data)
            console.log(res)
            if (res.data.success) {
                localStorage.setItem('tokenUser', res.data)
                loadUser()
            }
            return { success: true, data: res.data }
        } catch (error) {
            console.log(error)
            return { success: false, message: error.message }
        }
    }
    const logoutUser = () => {
        localStorage.removeItem('tokenUser')
        setAuthState({
            ...authState,
            isAuthenticated: false,
            user: null,
            authLoading: false,
        })
    }
    const authContextData = { loginUser, registerUser, logoutUser, authState }
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
