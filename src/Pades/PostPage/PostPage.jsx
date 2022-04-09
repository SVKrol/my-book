import React, { useState, useEffect } from "react";
import api from "../../utils/Api";
import { useParams, useNavigate } from "react-router-dom";
import { OnePost } from "../../components/OnePost/OnePost";
import Spinner from "../../components/Spinner/index"; 
import { NotFound } from "../../components/NotFound";


export const PostPage = ({handleDeletePost, handlePostLike, posts}) => {
  const navigate = useNavigate();
  const { postID } = useParams();
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    api.getPostById(postID)
      .then((dataPost) => {
        setPostData(dataPost)
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false))
  },[postID, posts]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Назад
        </button>
        {isLoading  && <Spinner/> }
        {isError && <NotFound buttonAction={()=>navigate("/")}/>}
        {!isLoading && !isError && <OnePost {...postData} onDeletePost={handleDeletePost} onPostLike={handlePostLike}/>}
      </div>
    </>
  );
};