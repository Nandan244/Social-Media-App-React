import React from 'react'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
import "./PostSection.css"

const PostSection = () => {
  return (
    <div className='PostSection'>
      <PostShare/>
      <Posts/>
    </div>
  )
}

export default PostSection