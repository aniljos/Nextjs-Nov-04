'use client'

import {ChangeEvent, useState} from 'react';

type CounterProps = {
    initialValue: number
}

function Counter(props: CounterProps) {

    const [counter, setCounter] = useState(props.initialValue);

    function inc() {
        
        //props.initialValue++;
        //console.log("inc invoked", props.initialValue);
        //setCounter(counter + 1);
        //setCounter(counter + 1);
        //console.log("counter", counter);
    
        setCounter(pCounter => pCounter + 1);
        //setCounter(pCounter => pCounter + 1);
    
    }

    function decr(){
        setCounter(counter - 1);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>){

        const value = e.target.value;
        setCounter(Number(value));
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
        </div>
    )
}

export default Counter;