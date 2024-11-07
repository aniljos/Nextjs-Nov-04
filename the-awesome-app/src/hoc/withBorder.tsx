import React from "react"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withBorder(Component: any){

    //return a new component
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function withBorderHOC(props: any){

        return (
            <div style={{border: '2px solid blue', margin: '7px', padding: '7px'}}>
                <Component {...props}/>
            </div>
        )
    }
}