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

export const addNewPost = createAsyncThunk("posts/addNewPost", async (initialPost) => {
  const response = await axios.post(POSTS_URL, initialPost)
  return response.data
})

export const updatePost  = createAsyncThunk("posts/updatePost", async(initialPost) => {
  try {
    const {id} = initialPost;
      const response = await axios.put(`${POSTS_URL}/${id}`, initialPost)
      return response.data
  } catch (error) {
    // return error.message
    return initialPost; // only for Testing Redux! 
    // As we cannot update remote Post/ newly created post, we get error, so we are 
    // returning initialPost
  }
})

export const deletePost = createAsyncThunk("posts/deletePost", async (initialPost) => {
  const { id } = initialPost
  const response = await axios.delete(`${POSTS_URL}/${id}`)
  if(response?.status === 200) return initialPost;
  return `${response?.status} : ${response.statusText}`
})


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

        // Add all fetched posts to the array
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // Fix for API post IDs:
        // Creating sortedPosts & assigning the id
        // would be not be needed if the fake API
        // returned accurate new post IDs
        const sortedPosts = state.posts.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
        action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
        // End fix for fake API post IDs

        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        console.log(action.payload);
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        // axios response
        if (!action.payload?.id) {
          console.log("Update could not complete");
          console.log(action.payload);
          return;
        }

        const { id } = action.payload;
        action.payload.data = new Date().toISOString();
        const posts = state.posts.filter((post) => post.id !== id);
        // axios put response returns updated post, we add date in it and
        // add the edited post which is present is action payload
        state.posts = [...posts, action.payload];
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if(!action.payload?.id) {
          console.log('Delete could not complete');
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        const posts = state.posts.filter(post => post.id !== id);
        state.posts = posts
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
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)

export default postsSlice.reducer