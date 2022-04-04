import React from 'react';
import "./styles.css"
import Button from '@mui/material/Button';


export const InfoBox = () => {
    const handleClickCreatePost = function (e) {
        e.preventDefault();
        console.log("Есть контакт");
    }
 return (
        <div className="info">
            <div className='info_about'>
                <h3 className= 'Никогда не сожалей о том, что заставляет тебя улыбаться. Добро пожаловать!'>Never regret anything that made you smile. Welcome!</h3>
            </div>
            <Button variant="contained" onClick={handleClickCreatePost}>Разместить пост</Button>
        </div>
 )
}