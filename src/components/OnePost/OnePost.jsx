import React, { useContext } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import "./styles.css";
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {ReactComponent as Save} from '../Post/img/save.svg';
import cn from 'classnames';
import { UserContext } from "../../context/userContext";
import UpdateModal from "../UpdatePostModal";

dayjs.locale('ru');

export const OnePost = ({onPostLike, onDeletePost, title, image, _id, likes, tags, text, created_at, updated_at, author: {name, about, email, avatar}, author}) => {
  let postDate = dayjs(created_at).format('dddd, HH:mm DD.MM.YYYY');
  let postDateUpdate = dayjs(updated_at).format('dddd, HH:mm DD.MM.YYYY');
  let likeCounter = likes.length;
  let user = useContext(UserContext);
  let liked = likes.some(id=> id === user._id);
  

  function handleLikeClick() {
    onPostLike({_id, likes})
  }

  function handleDeletePostClick() {
    onDeletePost({_id})
  }


    return (
        <>
        <Card sx={{ maxWidth: 1024 }} className="card">
          <div className="title">
            <b>{title}</b>
            <button className="card_like" onClick={handleLikeClick}>
                <Save alt="likes" className={cn({'card_like_active': liked})}/>
                <a>{likeCounter}</a>
            </button>
          </div>
          <div className="user_info">
            <img className="avatar" src={avatar} alt="img" />
            <div className="user">
              <b>{name}</b>
              <a>{about}</a>
              <b>{email}</b>
            </div>
          </div>
          <img src={image} alt="img" />
          <div className="all-tags">
            {tags.map((tag) => { return <div key={tags.indexOf(tag)} className="tag">{tag}</div>})}
          </div>
          <p className="text">{text}</p>
          <p><b>Опубликовано: </b>{postDate}</p>
          <p><b>Изменено: </b>{postDateUpdate}</p>
          {author?._id === user?._id && (
        <div className="buttons">
        <Button variant="contained" onClick={handleDeletePostClick}>
          Удалить пост
        </Button>
        <UpdateModal />
        </div>
      )}
        </Card>
        </>
    );
  };