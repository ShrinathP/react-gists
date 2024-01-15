import { useEffect, useState, useRef } from "react"
import { useLocation, Link } from "react-router-dom"

/** Example of useRef to stop MULTIPLE useEffect on first Mount -
 * At the start the user array is always undefined and 
 * 
 * Extension: useRef on multiple useEffect
 * https://dpericich.medium.com/how-to-bypass-useeffect-on-your-first-page-render-c31b7ba112a7
 * 
 * */

const User4 = ({ defaultId = 1 }) => {
  const [query, setQuery] = useState('');
  const [secondVariable, setSecondVariable] = useState('')

  const hasPageBeenRendered = useRef({ effect1: false, effect2: false})

  useEffect(() => {
    if(hasPageBeenRendered.current['effect1']) {
      // Some logic here
      // return () => {} //cleanup function
    }
    hasPageBeenRendered.current['effect1'] = true
  }, [query])

  useEffect(() => {
    if(hasPageBeenRendered.current['effect2']) {
      // Some logic here
      // return () => {} //cleanup function
    }
    hasPageBeenRendered.current['effect2'] = true
  }, [secondVariable])

    return (
      <div>Testing stop multiple useEffect on first render</div>
    );
}

export default User4

