import React, { useState, useEffect } from "react";
import "./index.css";
import { Header } from "./components/Header";
import { InfoBox } from "./components/InfoBox";
import { Footer } from "./components/Footer";
import api from "./utils/Api";
import { Route, Routes } from "react-router-dom";
import { AllPosts } from "./Pades/AllPostst/AllPosts";
import { NotFoundPage } from "./Pades/NotFoundPage/NotFoundPage";
import { UserContext } from "./context/userContext";
import { PostPage } from "./Pades/PostPage/PostPage";
import Spinner from "./components/Spinner";

export const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.getPostsList(), api.getUserInfo()]).then(
      ([postData, userData]) => {
        setPosts(postData);
        setCurrentUser(userData);
        setIsLoading(false);
      }
    );
  }, []);

  function handlePostLike({ _id, likes }) {
    const isLiked = likes.some((id) => id === currentUser._id);
    api.changeLikeStatus(_id, isLiked).then((newPost) => {
      const newPostLiked = posts.map((post) => {
        return post._id === newPost._id ? newPost : post;
      });

      setPosts(newPostLiked);
    });
  }

  function handleDeletePost({ _id }) {
    api.deletePost(_id).then(() => {
      api.getPostsList().then((newPosts) => {
        setPosts(newPosts);
      });
    });
  }

  return (
    <UserContext.Provider value={currentUser}>
      <Header />
      <div className="content">
        <InfoBox setPosts={setPosts}/>
        <Routes>
          <Route
            path="/"
            element={
              isLoading
              ? <Spinner/>
              : <AllPosts
                posts={posts}
                handlePostLike={handlePostLike}
                handleDeletePost={handleDeletePost}
              />
            }
          />
          <Route
            path="/post/:postID"
            element={
              <PostPage
                posts={posts}
                handlePostLike={handlePostLike}
                handleDeletePost={handleDeletePost}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </UserContext.Provider>
  );
};

// ₽
