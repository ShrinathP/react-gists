/*
https://www.syncfusion.com/blogs/post/implementing-react-custom-hooks-a-complete-guide.aspx


https://gist.github.com/gragland/d5c183230a78b207ad9d14d38cc8f4f9

*/

import { useCallback, useState } from "react";

export default function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle];
}
