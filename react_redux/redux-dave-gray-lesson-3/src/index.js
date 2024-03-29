import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';

//dispatch fetchUsers immediately on load of the index page
store.dispatch(fetchUsers())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// commenting out StrictMode as it causes PostList API call twice
  // <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider> 
  // </React.StrictMode>
);


