import React from "react";
import { Card, Button } from 'antd';
import "./styles.css";
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {ReactComponent as Save} from './img/save.svg';
import cn from 'classnames';

dayjs.locale('ru');

export const Post = ({onPostLike, onDeletePost, title, image, _id, likes, tags, text, created_at, updated_at, author: {name, about, email, avatar}, user}) => {
  let postDate = dayjs(created_at).format('dddd, HH:mm DD.MM.YYYY');
  let postDateUpdate = dayjs(updated_at).format('dddd, HH:mm DD.MM.YYYY');
  let likeCouter = likes.length;
  let liked = likes.some(id=> id === user._id);
  

  function handleLikeClick() {
    onPostLike({_id, likes})
  }

  function handleDeletePostClick() {
    onDeletePost({_id})
  }


    return (
        <Card bordered={false} className="card">
          <div className="title">
            <b>{title}</b>
            <button className="card_like" onClick={handleLikeClick}>
                <Save alt="likes" className={cn({'card_like_active': liked})}/>
                <a>{likeCouter}</a>
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
          <Button type="primary" onClick={handleDeletePostClick}>Удалить пост</Button>
        </Card>
    );
  };