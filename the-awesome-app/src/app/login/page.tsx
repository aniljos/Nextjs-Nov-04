'use client'
import { MouseEvent, useEffect, useRef, useState } from "react"

export default function Login(){

    const nameInputRef = useRef<HTMLInputElement>(null);
    const [userName, setUserName] = useState("");
    const [password, setPassowrd] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=> {
        
        nameInputRef.current?.focus();

    }, [])

    function handleLogin(e: MouseEvent<HTMLButtonElement>){

        e.preventDefault();

        if(userName && password){
            setErrorMessage("");
            
        }
        else{
            setErrorMessage("Enter the credentials");
        }
    }

    return (

        <div>
            <h4>Login</h4>

            {errorMessage ? <div className="alert alert-danger">Enter the credentials</div> : null}

            <form>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input ref={nameInputRef} className="form-control" type="text" id="name" 
                                    value={userName} onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Pasword</label>
                    <input className="form-control" type="password" id="pwd" 
                                    value={password} onChange={e => setPassowrd(e.target.value)}/>
                </div>

                <br/>

                <button className="btn btn-success" onClick={handleLogin}>Login</button>

            </form>
        </div>

    )

}