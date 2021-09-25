import React, { Fragment, useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
const FormLogin = () => {
    const { loginUser, registerUser, authState } = useContext(AuthContext)
    const [userForm, setUserForm] = useState({
        username: '',
        password: '',
    })
    const history = useHistory()
    const login = async (e) => {
        e.preventDefault()
        const res = await loginUser(userForm)
        if (res.success) {
            history.push('/')
        }
    }
    return (
        <Fragment>
            <div className="form">
                <form onSubmit={login}>
                    <div className="form_input">
                        <input
                            type="text"
                            placeholder="User name"
                            value={userForm.username}
                            onChange={(e) => {
                                setUserForm({
                                    ...userForm,
                                    username: e.target.value,
                                })
                            }}
                        />
                    </div>
                    <div className="form_input">
                        <input
                            type="password"
                            placeholder="Password"
                            value={userForm.password}
                            onChange={(e) => {
                                setUserForm({
                                    ...userForm,
                                    password: e.target.value,
                                })
                            }}
                        />
                    </div>
                    <button>Login</button>
                </form>
                <div className="change">
                    <button>Register</button>
                </div>
            </div>
        </Fragment>
    )
}

export default FormLogin
