
export type AuthState = {
    isAuthenticated: boolean,
    userName: string,
    accessToken: string, 
    refeshToken: string
} 

const initialState: AuthState = {
    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refeshToken: ""
}

export type AuthAction = {
    type: string,
    payload?: AuthState,
    token?: string
}

export const authReducer = (currentState=initialState, action: AuthAction): AuthState | undefined=> {

    
    //return the updated state;
    // Action: {type: 'logged_in', payload: {isAuthenticated: true, userName:"", accessToken: "", refershToken: ""}}
    // Action: {type: "logged_out"}
    // Action: {type: "update_access_token", token: ""}

    if(action.type === "logged_in"){

        return action.payload;
    }
    if(action.type === "logged_out"){
        
        return initialState;
    }
    if(action.type === "update_access_token" && action.token){
        return {
            ...currentState,
            accessToken: action.token
        }
    }
    return currentState;

}