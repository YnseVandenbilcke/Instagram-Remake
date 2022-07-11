import React, { useState } from 'react'
import './post.css'
import {BsThreeDots, BsBookmark, BsChat, BsShare, BsBookmarkCheck } from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
import TextField from "@mui/material/TextField";

const Post = ({profilePicture, name, picture, likes, description, comments, daysPosted}) => {
  const [toggleHeart, setToggleHeart] = useState(false);
  const [toggleBookmark, setToggleBookmark] = useState(false);

  let dayString;

  switch(daysPosted){
    case 0:
      dayString = "today";
      break;
    case 1:
      dayString = `${daysPosted} day ago`;
      break;
    default:
      dayString = `${daysPosted} days ago`;
      break;
  }

  return (
    <div className='post'>
      <div className='post_topbar'>
        <div className='post_topbar__name'>
          <img src={profilePicture} alt={name} />
          <p>{name}</p>
        </div>
        <BsThreeDots size={27} />
      </div>
      <div className='post_middle'>
        <img src={picture} alt={name} />
      </div>
      <div className='post_caption'>
        <div className='post_icons'>
          <div className='post_icons__left'>
            {toggleHeart
              ? <AiFillHeart size={27} color={"red"} onClick={() => setToggleHeart(false)} />
              : <AiFillHeart size={27} onClick={() => setToggleHeart(true)} />
            }            
            <BsChat size={27} />
            <BsShare size={27} />
          </div>
          {toggleBookmark
            ? <BsBookmarkCheck size={27} style={{margin: 5}} onClick={() => setToggleBookmark(false)} />
            : <BsBookmark size={27} style={{margin: 5}} onClick={() => setToggleBookmark(true)} />
          }
        </div>
        <div className='post_caption__likes'>
          <p>Liked by <b>{likes}</b></p>
        </div>
        <div className='post_caption__caption'>
          <p><b>{name}</b> {description}</p>
        </div>
        <div className='post_caption__comments'>
          <p>View all {comments} comments</p>
        </div>
        <div className='post_caption__date'>
          <p>Posted {dayString}</p>
        </div>
        <div className='post_caption__addComment'>
          <TextField 
            id='standard-basic'
            label="Add a comment"
            variant='standard'
            sx={{
              width: "90%"
            }}
          />
          <FiSend size={27} className="post-sendButton" />
        </div>
      </div>
    </div>
  )
}

export default Post