import React, { useState } from "react";
import { addPosts } from "../posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import { useSelector } from "react-redux";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const users = useSelector(selectAllUsers);
  const [userId, setUserId] = useState("");

  const renderUsers = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  const onSelectchange = (e) => {
    setUserId(e.target.value);
  };

  const dispatch = useDispatch();

  const onAddPost = (e) => {
    e.preventDefault();

    dispatch(
      addPosts({
        postId: nanoid(),
        title: title,
        content: content,
        userId: userId,
        date: new Date().toISOString(),
        reactions: {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        },
      })
    );
    setTitle("");
    setContent("");
    setUserId("");
  };
  const canSave = title !== "" && content !== "" && userId !== "";
  return (
    <div className="add-post">
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Select Author</label>
        <select
          onChange={onSelectchange}
          className="form-control"
          id="author"
          name="author"
          value={userId}
        >
          <option value=""></option>
          {renderUsers}
        </select>
        <label htmlFor="content">Content</label>
        <textarea
          type="text-area"
          id="content"
          name="content"
          className="form-control"
          rows="5"
          cols="70"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="button"
          className="btn-add"
          onClick={onAddPost}
          disabled={!canSave}
        >
          {" "}
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
