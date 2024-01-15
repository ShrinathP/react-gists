import { useEffect, useState, useRef } from "react"
import { useLocation, Link } from "react-router-dom"

/** Example of useRef to stop useEffect on first Mount
 * At the start the user array is always undefined and 
 * the useEffect depending on this array will always run 
 * 
 * https://typeofnan.dev/how-to-prevent-useeffect-from-running-on-mount-in-react/
 * 
 * Extension: useRef on multiple useEffect
 * https://dpericich.medium.com/how-to-bypass-useeffect-on-your-first-page-render-c31b7ba112a7
 * 
 * We probably don’t want to actually run this effect on our data when it’s undefined
 * (as it will be on initial render) but rather we want to wait until it is populated from the API call.
 * */

const User3 = ({ defaultId = 1 }) => {

    const [user, setUser] = useState({});
    let id = useLocation().pathname.split("/")[2];
    id = id || defaultId;
    const isMounted = useRef(false);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }, []);

    function doSomething(data) {
      console.log(`User data value: ${data}`);
    }

    useEffect(() => {
      if (isMounted.current) {
        doSomething(data);
      } else {
        isMounted.current = true;
      }
    }, [data]);

    return (
      <div>
        <h2>Testing multiple useEffect on first render</h2>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <ul>
          <li><Link to="/users1/1">Fetch User 1</Link></li>
          <li><Link to="/users1/2">Fetch User 2</Link></li>
          <li><Link to="/users1/3">Fetch User 3</Link></li>
        </ul>
      </div>
    );
}

export default User3

