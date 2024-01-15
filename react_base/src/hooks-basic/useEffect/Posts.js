import { useEffect, useState } from "react";

// Use Effect cleanup using variable name

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) {
          alert("posts are ready, updating state!");
          setPosts(data);
          console.log(data);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div>
      {posts?.map((p, index) => (
        <p key={p.id}>
          {index} - {p.title}
        </p>
      ))}
    </div>
  );
};

export default Posts;
