import { useReducer } from 'react';

//useToggle using useReducer Function

function toggler(currentValue, newValue) {
  return typeof newValue === 'boolean' ? newValue : !currentValue;
}
function useToggle(initialValue = false) {
  return useReducer(toggler, initialValue);
}

export default useToggle;
