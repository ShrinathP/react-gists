import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState('idle')
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value); //note we are passing userid

  // if addRequestStatus is not idle then already a post is going on
  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'
  
  const onSavePostClicked = () => {
    if(canSave) {
      try {
        setAddRequestStatus('pending')
        //using unwrap to catch error
        dispatch(addNewPost({title, body: content, userId})).unwrap()
        

        setTitle('')
        setContent('')
        setUserId('')
        navigate('/')
      } catch (error) {
        
      } finally {
        setAddRequestStatus('idle')
      }
    }
  };

  

  //note we are passing userid as value
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {userOptions}
        </select>

        <label htmlFor="postContent">Post Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button 
        type="button" 
        onClick={onSavePostClicked}
        disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
