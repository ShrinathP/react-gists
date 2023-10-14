import { useState, useRef } from "react";

// useBoolean Custom Hook
// https://dev.to/iamludal/react-custom-hooks-useboolean-3m6c

export default function useBoolean(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggler = () => {
        setValue(oldValue => !oldValue)
    }

    const handlers = useRef({
        toggler,
        on: () => setValue(true),
        off: () => setValue(false)
    })

    return [value, handlers.current]

}