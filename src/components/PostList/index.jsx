import React from "react";
import s from "./styles.module.css";

import { Post } from "../Post";

export const PostList = ({ posts, handlePostLike, handleDeletePost }) => {
  return (
    <div className={s.posts}>
      {posts.map(({ ...postItem }) => {
        return (
          <Post
            key={postItem._id}
            {...postItem}
            onPostLike={handlePostLike}
            onDeletePost={handleDeletePost}
          />
        );
      })}
    </div>
  );
};
