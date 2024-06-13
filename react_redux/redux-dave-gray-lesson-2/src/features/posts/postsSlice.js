import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard a good thing about this",
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
    id: "2",
    title: "Slices...",
    content: "The more i say slice, the more i think about pizzas",
    date: sub(new Date(), { minutes: 7 }).toISOString(),
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
    // prepare is used to prepare the payload for the reducer to use
    // abstracting complex logic inside prepare of
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
            date: new Date().toISOString(),
            userId: userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if(existingPost) {
        // increase the count of reaction in reaction array
        existingPost.reactions[reaction]++
      }
    }
  },
});

/*

1. export actions - used in component to modify state - 
createSlice creates action creator function for every reducer - needs to be executed in dispatch function
2. export reducer - used in configurestore
3. export selectorFunction - used in component to select properties of a state ()
advantage is - if the shape of state changes, we can change this function at only one place

*/
export const { postAdded, reactionAdded } = postsSlice.actions
export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer