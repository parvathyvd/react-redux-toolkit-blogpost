import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostIem from "./PostIem";
import {
  selectAllPosts,
  selectAllStatus,
  selectAllError,
  fetchPosts,
} from "./postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  console.log("posts are", posts);
  const status = useSelector(selectAllStatus);
  const error = useSelector(selectAllError);

  useEffect(() => {
    if (status === "idle") dispatch(fetchPosts());
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "failed") {
    content = <p>{error}</p>;
  } else if (status === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => <PostIem post={post} key={post.id} />);
  }
  return <div className="posts">{content}</div>;
};

export default Posts;
