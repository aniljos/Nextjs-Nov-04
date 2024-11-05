export type GadgetState = {
    cart: string[]
}

const initialState: GadgetState = {
    cart: []
}

export const gadgetsReducer = (currentState= initialState, action: {type: string})=>{

    console.log("gadgetsReducer", action);
    return currentState;

}
