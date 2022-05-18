import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    postId: 1,
    title: "better to get this",
    content: "amet consectetur adipisicing elit. voluptatem odit voluptatibus",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    postId: 2,
    title: "consectetur adipisicing elit",
    content:
      "consectetur adipisicing elit. Facere . Facere, magni molestias voluptatem odit voluptatibus",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.push(action.payload);
    },
    addReactions: (state, action) => {
      const { postId, reaction } = action.payload;
      //  console.log("postId", postId, reaction);

      const existingItem = state.find((post) => post.postId === postId);

      if (existingItem) {
        existingItem.reactions[reaction]++;
      }
    },
  },
});

export const { addPosts, addReactions } = postsSlice.actions;

export default postsSlice.reducer;
