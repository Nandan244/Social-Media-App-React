import React from 'react'
import "./ProfileLeft.css"
import LogowithSearch from "../LogowithSearch/LogoSearch"
import FollowersCard from "../FollowersCard/FollowersCard"
import ProfileInfo from "../ProfileInfo/ProfileInfo"

const Profileleft = () => {
  return (
    <div className="ProfileSection">
        <LogowithSearch/>
        <ProfileInfo/>
        <FollowersCard/>
    </div>
  )
}

export default Profileleft