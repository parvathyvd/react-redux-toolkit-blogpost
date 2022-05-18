import React from "react";
import { useSelector } from "react-redux";
import PostIem from "./PostIem";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const sortPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="posts">
      {sortPosts.map((post) => {
        return <PostIem post={post} key={post.postId} />;
      })}
    </div>
  );
};

export default Posts;
