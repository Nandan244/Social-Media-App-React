import React from 'react'
import "./ProfileCard.css"
import Cover from "../../img/cover.jpg"
import ProfileImg from "../../img/profileImg.jpg"


const ProfileCard = () => {


  const profilePg = true;
  return (
    <div className="ProfileCard">
        <div className="profileImages">
            <img src={Cover} alt=""/>
            <img src={ProfileImg} alt=""/>
        </div>

        <div className='ProfileName'>
          <span>Zendaya M J</span>
          <span>Senior UI/UX Designer</span>
        </div>

        <div className="followStatus">
          <hr />
          <div>
          
          <div className="Follow">
            <span>7450</span>
            <span>Followers</span>
          </div>
          <div className='vertline'></div>
          <div className="Follow">
            <span>23</span>
            <span>Following</span>
          </div>
          {profilePg && 
          <>
          <div className="vertline"></div>
          <div className="Follow">
            <span>45</span>
            <span>Posts</span>
          </div>
          </>
          }
          
          </div>
          <hr />
        </div>
        {profilePg? '' : 
        <div className='profileBtn'>
          <span>My Profile</span>
        </div>
      }

    </div>
  )
}

export default ProfileCard