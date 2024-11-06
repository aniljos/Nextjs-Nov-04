import { MouseEvent, useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import {useDispatch} from 'react-redux';
import { AppDispatch } from "@/state/redux/store";
import { useTitle } from "@/hooks/useTitle";

export function useLogin(){

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


    return {nameInputRef, 
                    userName, 
                    setUserName, 
                    password, 
                    setPassowrd, 
                    errorMessage, 
                    handleLogin};

}