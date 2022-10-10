import React from 'react'
import "./Home.css"
import ProfileSection from "../../Components/ProfileSection/ProfileSection";
import EventSection from "../../Components/EventSection/EventSection";
import PostSection from "../../Components/PostSection/PostSection";

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSection/>
        <PostSection/>
        <EventSection/>
    </div>
  )
}

export default Home;