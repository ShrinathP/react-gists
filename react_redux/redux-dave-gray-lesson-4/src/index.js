import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import { fetchPosts } from './features/posts/postsSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//dispatch fetchUsers immediately on load of the index page
store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // commenting out StrictMode as it causes PostList API call twice
  // <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/*' element={<App/>} />
      </Routes>
    </Router>
    </Provider> 
  // </React.StrictMode>
);
