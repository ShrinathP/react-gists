import { useEffect, useRef, useCallback } from "react";
import useTimeout from "./05_UseTimeout_02";

// https://medium.com/@sergeyleschev/supercharge-your-projects-with-custom-hooks-4d946b297d18
// WEBDEV
// https://youtu.be/0c6znExIqRw?si=8ATObd5q9MKAWKHA&t=309


export default function useDebounce(callback, delay, dependencies) {
  const {clear, reset} = useTimeout(callback, delay);

  //call reset after some timeout, 
  //here callback function can be
  // - inout validation
  // - input search bar
  // - optimizing network requests - ensuring request is sent only after user stops typing

  useEffect(reset, [...dependencies, reset])
  useEffect(clear, []) //to clear the first set timer on page load at the first time
  //removing the above will run the callback (on delay) after page load for the first time


}
