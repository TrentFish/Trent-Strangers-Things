import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from './api';
import EditPost from './UpdatePosts.jsx';

const Post = ({ posts, auth, setPosts })=> {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find(post => post._id === id);

  const deletePost = async () => {
    await api.deletePost(post._id);
    navigate(`/`);
    setPosts(posts.filter(p => p !== post));
  }

  if(!post){
    return null;
  }
  return (
    <div>
      <h1>{ post.title }</h1>
      <p>{ post.description }</p>
      { auth._id === post.author._id ? <EditPost post={ post } setPosts={ setPosts } posts={ posts }/>: ''}
      { auth._id === post.author._id ? <button onClick={ deletePost }>Delete</button>: ''}
    </div>
  );
};

export default Post;