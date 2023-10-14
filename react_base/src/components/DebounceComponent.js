import { useState } from "react"
import useDebounce from "../hooks/06_UseDebounce_01";

export default function DebounceComponent() {
    const [count, setCount] = useState(10)
    //as the count changes we keep on resetting timer
    //will alert after 1 second delay of no count change
    useDebounce(() => alert(count), 1000, [count])
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}