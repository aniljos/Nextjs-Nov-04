'use client'

import {ChangeEvent, useEffect, useRef, useState} from 'react';
import Message from './Message';

type CounterProps = {
    initialValue: number
}

function Counter(props: CounterProps) {

    const [counter, setCounter] = useState(props.initialValue);
    //const [value, setValue] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log("useEffect counter updated", counter);
        //clean-up
        return () => {
            console.log("useEffect counter cleanup", counter);
        }


    }, [counter])

    // useEffect(() => {
    //     console.log("useEffect with no dep array");
    // })

    function inc() {
        
        //props.initialValue++;
        //console.log("inc invoked", props.initialValue);
        //setCounter(counter + 1);
        //setCounter(counter + 1);
        //console.log("counter", counter);
    
        setCounter(pCounter => pCounter + 1);
        //setCounter(pCounter => pCounter + 1);

        //console.log("counter", counter);
    
    }

    function decr(){
        setCounter(counter - 1);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>){

        const value = e.target.value;
        setCounter(Number(value));
    }

    function handleUpdate(){
       // setCounter(value);
        //setValue(0);

        console.log("inputRef", inputRef);
        setCounter(Number( inputRef.current?.value));
        if(inputRef.current?.value){
            inputRef.current.value = "0"
        }
       
    }

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            <div>
                Counter: <input placeholder='Counter' type='number' value={counter} onChange={handleChange}/>
            </div>

            <div>
                {/* Update Counter: <input type='number' value={value} onChange={e => setValue(Number(e.target.value))}/> &nbsp; */}
                Update Counter: <input ref={inputRef} type='number' /> &nbsp;
                <button onClick={handleUpdate}>Update</button>
            </div>


            <br/>
            {counter >= 7 ?  <Message text={"Ctr: " + counter} color='blue' /> : null}

            
        </div>
    )
}

export default Counter;