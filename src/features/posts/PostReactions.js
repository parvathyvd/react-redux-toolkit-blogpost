import React from "react";
import { useDispatch } from "react-redux";
import { addReactions } from "./postsSlice";
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const PostReactions = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(addReactions({ postId: post.id, reaction: name }))
        }
      >
        <span className="emoji">{emoji}</span>
        <span className="num">{post.reactions[name]}</span>
      </button>
    );
  });

  return <div className="reactions">{reactionButtons}</div>;
};

export default PostReactions;
