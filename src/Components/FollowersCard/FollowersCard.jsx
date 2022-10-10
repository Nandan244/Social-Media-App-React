import React from 'react'
import "./FollowersCard.css"
import Followers from "../../TempData/Data"


const FollowersCard = () => {
  return (
    <div className='FollowersCard'>
        <h3>Who's Following You!</h3>
        <div>
            {Followers.map((follower,id)=>{
                return(
                    <div className='Follower'>
                        <div >
                        <img src={follower.img} alt="" className='followerImg'/>
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                        </div>
                        <button className='button follow-btn'>Follow</button>
                        
                    </div>
                )
            })}
            <div className='MoreBtn'>
                             <span>Show All</span>
                        </div>
        </div>
    </div>
  )
}

export default FollowersCard