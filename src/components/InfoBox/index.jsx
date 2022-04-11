import React from 'react';
import "./styles.css"
import CreateModal from '../CreatePostModal';


export const InfoBox = ({setPosts}) => {

 return (
        <div className="info">
            <div className='info_about'>
                <h3 className='welcome'>Добро пожаловать!</h3>
            </div>
            <CreateModal setPosts={setPosts}/>
        </div>
 )
}