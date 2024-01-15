import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {

    return (
        // remove the key from here if you put key in <PostsExcerpt key={post.id} />
        // <article key={post.id}>
        <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButtons post={post}/>
    </article>
    )
}

export default PostsExcerpt