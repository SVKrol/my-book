import React from 'react';
import "./styles.css"
import CreateModal from '../CreatePostModal';


export const InfoBox = ({setPosts}) => {

 return (
        <div className="info">
            <div className='info_about'>
                <h3 className='Welcome! Never regret anything that made you smile.'>Добро пожаловать! Никогда не сожалей о том, что заставляет тебя улыбаться.</h3>
            </div>
            <CreateModal setPosts={setPosts}/>
        </div>
 )
}