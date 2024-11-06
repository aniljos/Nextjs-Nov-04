'use client'

import { useLogin } from "./useLogin"


export default function Login() {

    const { nameInputRef,
        userName,
        setUserName,
        password,
        setPassowrd,
        errorMessage,
        handleLogin } = useLogin()


    return (

        <div>
            <h4>Login</h4>

            {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null}

            <form>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input ref={nameInputRef} className="form-control" type="text" id="name"
                        value={userName} onChange={e => setUserName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Pasword</label>
                    <input className="form-control" type="password" id="pwd"
                        value={password} onChange={e => setPassowrd(e.target.value)} />
                </div>

                <br />

                <button className="btn btn-success" onClick={handleLogin}>Login</button>

            </form>
        </div>

    )

}