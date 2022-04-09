import React from "react";
import "./styles.css";
import notFound from './img/ic-notfound.svg';

export const NotFound = ({buttonAction}) => {
  return (
    <div className='notFound'>
        <img src={notFound} className='image-notfound' alt="" aria-hidden="true"/>
        <h1>Страница не найдена</h1>
        <button className="btn" onClick={buttonAction}>На главную</button>
    </div>
  );
};