import { useState } from "react";

export default function useToggle(initialState = false) {
  const [value, setValue] = useState(initialState);

  const toggleValue = (givenVal) => {
    typeof givenVal === "boolean"
      ? setValue(givenVal)
      : setValue((oldVal) => !oldVal);
  };
  return [value, toggleValue];
}
