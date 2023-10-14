import { useState, useRef, useMemo } from "react";


// useCounter Custom Hook
// https://dev.to/iamludal/custom-react-hooks-usecounter-5a73


export default function useCounter(initialValue) {
  
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue(c => c + 1)
  const decrement = () => setValue(c => c - 1)
  const reset = () => setValue(initialValue)

  return { value, increment, decrement, reset};
  
}
