import React from "react"


export function withBorder(Component: any){

    //return a new component
    return function withBorderHOC(props: any){

        return (
            <div style={{border: '2px solid blue', margin: '7px', padding: '7px'}}>
                <Component {...props}/>
            </div>
        )
    }
}