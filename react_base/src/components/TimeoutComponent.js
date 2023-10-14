import { useState } from "react";
import useTimeout from "../hooks/05_UseTimeout_01";

function TimeoutComponent() {
  const [hasTimeElapsed, setHasTimeElapsed] = useState(false)
  useTimeout(() => setHasTimeElapsed(true), 5000);

  return (
    <>
    <h2>
    {hasTimeElapsed
        ? '5 seconds has passed!'
        : 'The timer is running…'}
    </h2>
    </>
  );
}

export default TimeoutComponent;
