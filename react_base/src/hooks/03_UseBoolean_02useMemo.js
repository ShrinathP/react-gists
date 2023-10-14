import { useState, useRef, useMemo } from "react";
import useToggle from "./02_UseToggle";

// useBoolean Custom Hook
// https://marcoghiani.com/blog/react-custom-hooks-usetoggle-useboolean

/*
1. useMemo takes a function and a dependency array
2. useRef is used to reference an object

Both useRef and useMomo are used to make data mutable 
and not rerender on component rerender
*/
export default function useBoolean(initialValue = false) {
  const [value, toggleValue] = useToggle(initialValue);

  const handlers = useMemo(
    () => ({
      toggleValue,
      on: () => toggleValue(true),
      off: () => toggleValue(false),
    }),
    [toggleValue]
  );

  return [value, handlers.current];
}
