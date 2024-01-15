import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionButtons";
import { Link } from 'react-router-dom'

const PostsExcerpt = ({ post }) => {

    return (
        // remove the key from here if you put key in <PostsExcerpt key={post.id} />
        // <article key={post.id}>
        <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}> View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButtons post={post}/>
    </article>
    )
}

export default PostsExcerpt