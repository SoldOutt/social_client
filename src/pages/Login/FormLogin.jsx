import React, { Fragment, useState } from 'react'

const FormLogin = () => {
    return (
        <Fragment>
            <div className="form">
                <form>
                    <div className="form_input">
                        <input type="text" placeholder="User name" />
                    </div>
                    <div className="form_input">
                        <input type="password" placeholder="Password" />
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
