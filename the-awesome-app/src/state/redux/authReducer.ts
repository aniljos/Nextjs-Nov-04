
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
    payload?: AuthState
}

export const authReducer = (currentState=initialState, action: AuthAction) => {

    console.log("authReducer action", action);
    //return the updated state;
    return currentState;

}