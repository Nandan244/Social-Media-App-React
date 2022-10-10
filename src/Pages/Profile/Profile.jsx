import React from 'react'
import "./Profile.css"
import ProfileLeft from "../../Components/ProfileLeft/Profileleft"
import ProfileCard from "../../Components/ProfileCard/ProfileCard"
import PostSection from '../../Components/PostSection/PostSection'
import EventSection from '../../Components/EventSection/EventSection'

const Profile = () => {
  return (
    <div className='Profile'>
        <ProfileLeft/>
        <div className='ProfileCenter'>
          <ProfileCard/>
          <PostSection/>
        </div>
        <EventSection/>
    </div>
  )
}

export default Profile