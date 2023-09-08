import { useState } from "react"

export default function Counter(){
    const [count ,setCount] = useState(0)
    // console.log(abs)
    const hendelIncrement = ()=>{
        let newCount =  count+1
        setCount(newCount)
    }
    const hendelDecriment  = ()=>{
        const newCount = count - 1
        setCount(newCount)
    }
    return (
        <div className={"border: 1px solid red"}>
            <h3>Count: {count}</h3>
            <button onClick={hendelIncrement}>Increment</button>
            <button onClick={hendelDecriment}>Decriment</button>
        </div>
    )
}