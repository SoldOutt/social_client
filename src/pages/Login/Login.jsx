import React, { Fragment, useState, useContext } from 'react'

import FormLogin from './FormLogin'
import FormRegister from './FormRegister'
import './Login.scss'

const Login = () => {
    return (
        <Fragment>
            <div className="login">
                <div className="login_text">
                    <h1>FakeBook</h1>
                    <p>
                        Fakebook giúp bạn kết nối và chia sẻ với mọi người trong
                        cuộc sống của bạn.
                    </p>
                </div>
                <div className="login_form">
                    <div className="form">
                        <FormLogin></FormLogin>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
