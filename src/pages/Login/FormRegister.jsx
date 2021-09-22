import React, { Fragment, useState } from 'react'

const FormRegister = () => {
    return (
        <Fragment>
            <div className="form">
                <form>
                    <div className="form_input">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="form_input">
                        <input type="text" placeholder="Password" />
                    </div>
                    <div className="form_input">
                        <input type="text" placeholder="Confirm Password" />
                    </div>
                    <button>Register</button>
                </form>
                <div className="change">
                    <button>Login</button>
                </div>
            </div>
        </Fragment>
    )
}

export default FormRegister
