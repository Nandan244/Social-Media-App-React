import React, { useState } from 'react'
import "./ProfileInfo.css"
import EditIcon from '@mui/icons-material/Edit';
import { useSetState } from '@mantine/hooks';
import ProfileModal from '../ProfileModal/ProfileModal';

const ProfileInfo = () => {

  const [modalOpened,setModalOpened] = useState(false)
  return (
    <div className="ProfileInfo">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <EditIcon onClick={()=>setModalOpened(true)}/>
        <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>

      </div>
      <div className="Info">
        <span>
          <b>Status </b>
          <span>In Relationship</span>
        </span>
      </div>

      <div className="Info">
        <span>
          <b>Lives in </b>
          <span>Mumbai</span>
        </span>
      </div>

      <div className="Info">
        <span>
          <b>Works At </b>
          <span>UST Global</span>
        </span>
      </div>
      <button className="button logout-btn">Logout</button>
    </div>
  )
};

export default ProfileInfo