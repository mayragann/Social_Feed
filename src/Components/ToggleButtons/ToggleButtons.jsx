import React, { useState } from 'react';
import "./ToggleButtons.css"


const ToggleButtons = (props) => {
    const[likeButton, setLikeButton] = useState('inactive');
    const[dislikeButton, setDislikeButton] = useState('inactive');


    function handleClickLike(){

        if(likeButton === 'inactive'){
            setLikeButton('active-like');
            setDislikeButton('inactive')
        }
        else{
            setDislikeButton('inactive');
        }
    }
    function handleClickDislike(){

        if(dislikeButton === 'inactive'){
            setDislikeButton('active-dislike');
            setLikeButton('inactive')
        }
        else{
            setLikeButton('inactive');
        }
    }
        return(
            <div>
                <button className={likeButton} onClick={handleClickLike}>Like!</button>
                <button className={dislikeButton} onClick={handleClickDislike}>Dislike!</button>
            </div>
        )
    }

export default  ToggleButtons;