import { useEffect, useRef } from "react"


//webdevsimplified
export default function useUpdateEffect(callback, dependencies) {
    //set to true at start and dont run callback
    const firstRenderRef = useRef(true)

    useEffect(() => {
        if(firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }

        return callback
    }, dependencies)

}