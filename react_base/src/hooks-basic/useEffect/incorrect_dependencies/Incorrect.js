import { useEffect, useState } from "react"

// Dependencies should always be primitive - or use some useMemo or useCallback to 
// avoid recreation of the object on component rerender

export const useFetch = (options) => {
    const [data, setData] = useState(null)

    
    useEffect(() => {
        console.log("useFetch useEffect");
        if(options.url) {
            fetch(options.url)
        }
    }, [options])
    // This is wrong, here options is an object, 
    // you want to constraint the dependency array to primitives/ values
    // instead of object


}