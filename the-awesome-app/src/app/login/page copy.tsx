'use client'
import { MouseEvent, useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import {useDispatch} from 'react-redux';
import { AppDispatch } from "@/state/redux/store";
import { useTitle } from "@/hooks/useTitle";

export default function Login(){

    const nameInputRef = useRef<HTMLInputElement>(null);
    const [userName, setUserName] = useState("");
    const [password, setPassowrd] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    useTitle("Login");

    useEffect(()=> {
        
        nameInputRef.current?.focus();
        //document.title =  document.title + " " + "Login"

    }, [])

    async function handleLogin(e: MouseEvent<HTMLButtonElement>){

        e.preventDefault();
        //console.log(nameInputRef.current.value)
        if(userName && password){
            

            const url = "http://localhost:9000/login";
            // axios
            //     .post(url, {name: userName, password})
            //     //.then((successCallback, errorCallback)    
            //     .then((response)=> {
            //         console.log("success", response)
            //     }, (errorResponse) => {
            //         console.log("errorResponse", errorResponse);
            //     })

            try {
                
                const response =  await axios.post<{accessToken: string, refreshToken: string}>(url, {name: userName, password});
                console.log("success", response);
                setErrorMessage("");
                dispatch({type: "logged_in", payload: {isAuthenticated: true, userName, 
                                                        accessToken: response.data.accessToken, refreshToken: response.data.refreshToken }})

                router.push("/");

            } catch (errorResponse) {
                console.log("errorResponse", errorResponse);
                setErrorMessage("Invalid credentials");
                dispatch({type:"logged_out"})
            }
            

        }
        else{
            setErrorMessage("Enter the credentials");
        }
    }

    return (

        <div>
            <h4>Login</h4>

            {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null}

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