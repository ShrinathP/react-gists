import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"

/** Example of using Variable and cleanup function to stop non-needed API call  */

const User = ({ defaultId = 1 }) => {

    const [user, setUser] = useState({})
    let id = useLocation().pathname.split("/")[2]
    id = id || defaultId

    useEffect(() => {
        let unsubscribed = false;
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
            if(!unsubscribed) {
                setUser(data);
            }
        })
    
        return () => {
            console.log("cancelled!")
            unsubscribed = true;
        }

    }, 
    [id]);


    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <ul>
                <li><Link to='/users/1'>Fetch User 1</Link></li>
                <li><Link to='/users/2'>Fetch User 2</Link></li>
                <li><Link to='/users/3'>Fetch User 3</Link></li>
            </ul>
        </div>
    )
}

export default User
