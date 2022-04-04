import React, { useState, useEffect } from 'react';
import "./index.css"
import { Header } from './components/Header';
import { InfoBox } from "./components/InfoBox";
import { Footer } from "./components/Footer";
import { PostList } from './components/PostList';
import api from "./utils/Api";

export const App = () => {
   const [currentUser, setCurrentUser] = useState({});
   const [posts, setPosts] = useState([]);

   useEffect(()=> {
      Promise.all([api.getPostsList(), api.getUserInfo()])
        .then(([postData, userData])=> {
          setPosts(postData);
          setCurrentUser(userData)
        })
    },[])

    function handlePostLike({ _id, likes }) {
      const isLiked = likes.some((id) => id === currentUser._id);
      api.changeLikeStatus(_id, isLiked).then((newPost) => {
        const newPostLiked = posts.map((post) => {
          return post._id === newPost._id ? newPost : post;
        });
  
        setPosts(newPostLiked);
      });
    }
    
    function handleDeletePost({_id}) {
        api.deletePost(_id).then(() => {
          api.getPostsList().then((newPosts) => {
            setPosts(newPosts);
          });
      });
    }
    
 return (
    <>
       <Header user={currentUser}/>
       <div className="content">
           <InfoBox />
           <PostList posts={posts} handlePostLike={handlePostLike} user={currentUser} handleDeletePost={handleDeletePost}/>
       </div>
       <Footer />
    </>
 );
};

// ₽