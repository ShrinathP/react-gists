import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"

/** Example of Axios CancelToken and cleanup function to stop non-needed API call  */

const User2 = ({ defaultId = 1 }) => {
    
    const [user, setUser] = useState({})
    let id = useLocation().pathname.split("/")[2]
    id = id || defaultId
    
    useEffect(() => {
      const cancelToken = axios.CancelToken.source();
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
          cancelToken: cancelToken.token,
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("CancelToken cancelled!");
          } else {
            // todo: handle error
          }
        });

      return () => {
        cancelToken.cancel();
      };
    }, [id]);


    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <ul>
                <li><Link to='/users2/1'>Fetch User 1</Link></li>
                <li><Link to='/users2/2'>Fetch User 2</Link></li>
                <li><Link to='/users2/3'>Fetch User 3</Link></li>
            </ul>
        </div>
    )
}

export default User2
