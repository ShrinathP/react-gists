import { useSelector } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post, index) => (
      // in API reponse keys of the first 10 posts are same, 
      // so using index to avoid non unique key error
      // <PostsExcerpt key={post.id} post={post} />
      <PostsExcerpt key={index} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      {content}
    </section>
  );
};

export default PostsList;
