import React,{useState} from 'react'
import { useSetState } from '@mantine/hooks';
import "./EventSection.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';

const EventSection = () => {
  const [modalOpened,setModalOpened] = useState(false);

  return (
    <div className='EventSection'>
      <div className="nav-icons">
        <HomeOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <SettingsOutlinedIcon/>
        <ChatBubbleOutlineOutlinedIcon/>
      </div>
      
      <TrendCard/>
      <button className='button eventShareBtn' onClick={()=>setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>

    </div>
  )
}

export default EventSection