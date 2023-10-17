import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import axios from 'axios';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
  posts: [],
  status: 'idle',  // 'idle' | 'loading' | 'succeeeded' | 'failed'
  error: null
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // prepare is used to prepare the payload for the reducer to use
    // abstracting complex logic inside prepare of
    postAdded: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
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
      const existingPost = state.posts.find(post => post.id === postId)
      if(existingPost) {
        // increase the count of reaction in reaction array
        existingPost.reactions[reaction]++
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });

        // Add any fetched posts to the array
        state.posts = state.posts.concat(loadedPosts)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message

      })

  }
});

/*

1. export actions - used in component to modify state - createSlice creates action creator function for every reducer - needs to be executed in dispatch function
2. export reducer - used in configurestore
3. export selectorFunction - used in component to select properties of a state ()
advantage is - if the shape of state changes, we can change this function at only one place

*/
export const { postAdded, reactionAdded } = postsSlice.actions
export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default postsSlice.reducer