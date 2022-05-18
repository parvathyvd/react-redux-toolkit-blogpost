import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import PostReactions from "./PostReactions";
import TimeAgo from "./TimeAgo";

const PostIem = ({ post }) => {
  const { title, content, userId, postId, date } = post;

  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return (
    <div className="post-item">
      <h1>{title}</h1>
      <h2>{content}</h2>
      <div className="author-details">
        {author ? <h3>{author.name}</h3> : <h3>Unknown Author</h3>}
        <h4>
          <TimeAgo timeStamp={date} />
        </h4>
      </div>

      <PostReactions post={post} />
    </div>
  );
};

export default PostIem;
