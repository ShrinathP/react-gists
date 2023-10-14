import { useEffect, useRef } from "react";

// https://www.30secondsofcode.org/react/s/use-timeout/
// WEBDEV
// https://www.youtube.com/watch?v=nmLhEj2IZH4
// V good link
// https://www.30secondsofcode.org/react/hooks/p/1/

/**
 *
 * 
 * 1st useeffect to update the callBackRef whenever call back is updated
 * 2nd main useEffect to setTimeout using the updated callBackRef and also clearTimeout function
 */

export default function useTimeout(callback, delay) {
  const stableCallbackRef = useRef(callback);

  //update stableCallbackRef.current value whenever callback changes due to component reload
  useEffect(() => {
    stableCallbackRef.current = callback;
  }, [callback]);

  //set new timeout and clear old timeout if exists

  useEffect(() => {
    //execute the callback function (executor)
    const tick = () => stableCallbackRef.current();

    //if delay is not a number, no need to set or clear timeout
    if (typeof delay !== "number") return;

    const timer = setTimeout(tick, delay); //setTimer

    return () => clearTimeout(timer); //cleanup function
  }, [delay]);
}
