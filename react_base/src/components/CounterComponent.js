import useCounter from "../hooks/04_UseCounter"


function CounterComponent() {
     const { value, increment, decrement, reset} = useCounter(0);
    return (
        <div className="App">
        <h1>{value}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    )
}

export default CounterComponent