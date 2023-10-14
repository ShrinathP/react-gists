import { useState } from "react";
import useTimeout from "../hooks/05_UseTimeout_02";

function TimeoutComponent2() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 4000);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
}

export default TimeoutComponent2;
