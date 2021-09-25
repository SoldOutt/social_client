import { useContext, Fragment } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Redirect, Route } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { authState } = useContext(AuthContext)
    const { authLoading, isAuthenticated } = authState
    console.log(authState)
    if (authLoading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }
    return (
        <Fragment>
            <Route
                {...rest}
                render={(props) =>
                    isAuthenticated ? (
                        <Fragment>
                            <Component {...rest} {...props}></Component>
                        </Fragment>
                    ) : (
                        <Redirect to="/login"></Redirect>
                    )
                }
            />
        </Fragment>
    )
}
export default ProtectedRoute
