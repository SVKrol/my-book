import React from "react";
import { PostList } from "../../components/PostList";

export const AllPosts = ({
  posts,
  handlePostLike,
  handleDeletePost,
}) => {
  return (
    <>
      <div className="content_posts">
        <PostList
          posts={posts}
          handlePostLike={handlePostLike}
          handleDeletePost={handleDeletePost}
        />
      </div>
    </>
  );
};
