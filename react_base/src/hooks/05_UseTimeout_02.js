import { useEffect, useRef, useCallback } from "react";

// https://medium.com/@sergeyleschev/react-custom-hook-usetimeout-c47db1bc34b9
// WEBDEV
// https://youtu.be/0c6znExIqRw?si=5oUUusxU7mBG-WrL&t=125
// Vgood link
// https://medium.com/@sergeyleschev/supercharge-your-projects-with-custom-hooks-4d946b297d18

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  //update callbackRef.current value whenever callback changes due to component reload
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  //set new timeout and clear old timeout functions, wrapped in useCallBack to avoid recompute
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  //setTimeout - set and return clear
  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  //resetTimeout - clear and set - (no return function as we dont have to execute anything before next reset)
  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
