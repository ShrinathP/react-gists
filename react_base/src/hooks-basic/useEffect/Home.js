import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/posts'}>Go to Posts</Link></li>
                <li><Link to={'/users/1'}>User - Go to Abort Example using variable</Link></li>
                <li><Link to={'/users1/1'}>User1 - Go to Abort Example using Abort Controller</Link></li>
                <li><Link to={'/users2/1'}>User2 - Go to Abort Example using CancelToken</Link></li>
            </ul>
        </div>
    )
}

export default Home;