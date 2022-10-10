import React from 'react'
import "./ProfileSection.css"
import LogoSearch from '../LogowithSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const ProfileSection = () => {
  return (
    <div className='ProfileSection'>
      
    <LogoSearch/>
    <ProfileCard/>
    <FollowersCard/>
    
    </div>
  )
}

export default ProfileSection