import React from 'react'
import "./Post.css"
import Heart from "../../img/like.png"
import notLike from "../../img/notlike.png"
import comment from "../../img/comment.png"
import share from "../../img/share.png"

const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt=""/>

        <div className='PostReaction'>
            <img src={data.liked?Heart:notLike} alt=""/>
            <img src={comment} alt=""/>
            <img src={share} alt=""/>
        </div>
        <span><b>{data.likes}</b> Likes</span>
        <div className="details">
            <span><b>{data.name} </b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post