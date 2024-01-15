import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"

/** Example of AbortController and cleanup function to stop non-needed API call  */

const User1 = ({ defaultId = 1 }) => {
    
    const [user, setUser] = useState({})
    let id = useLocation().pathname.split("/")[2]
    id = id || defaultId
    
    useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        }).catch(err => {
            if(err.name === "AbortError") {
                console.log("AbortError cancelled!");
            } else {
                // todo: handle error
            }

        })

      return () => {
        controller.abort()
        console.log("Aborted API Call");
      };
    }, [id]);


    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <ul>
                <li><Link to='/users1/1'>Fetch User 1</Link></li>
                <li><Link to='/users1/2'>Fetch User 2</Link></li>
                <li><Link to='/users1/3'>Fetch User 3</Link></li>
            </ul>
        </div>
    )
}

export default User1
