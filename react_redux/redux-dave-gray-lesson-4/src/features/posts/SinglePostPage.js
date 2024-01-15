import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { selectPostById } from "./postsSlice"

import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionsButtons from "./ReactionButtons"


const SinglePostPage = () => {
    const { postId } = useParams()
    // changed string value of postId to Number for === strict equality
    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if(!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
    return (
      <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p className="postCredit">
          <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
          {/* <Link to={`post/edit/${post.id}`}> Edit Post</Link> */}
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionsButtons post={post} />
      </article>
    );
}

export default SinglePostPage