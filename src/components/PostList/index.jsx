import React from "react";
import s from "./styles.module.css";

import { Post } from "../Post";

export const PostList = ({posts, handlePostLike, user, handleDeletePost}) => {

  return (
    <div className={s.cards}>
      {posts.map(({...postItem}) => {
        return <Post key={postItem._id} {...postItem} onPostLike={handlePostLike} user={user} onDeletePost={handleDeletePost}/>;
      })}
    </div>
  );
};