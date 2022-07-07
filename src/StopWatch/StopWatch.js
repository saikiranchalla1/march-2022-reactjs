import React, {useState} from "react";


// <StopWatch theme="dark"/>

// <Item /> <- Counter


export default function StopWatch() {
    const [seconds, setSeconds] = useState(0);

    return (
        <>
            <h2>{seconds}</h2>
            <button onClick={() => setSeconds(seconds + 1)}>Click to add 1</button>
        </>  
    );
}



// element.addEventListener("click", function()...)
// onKeyUp
// onKeyDown
// onChange
