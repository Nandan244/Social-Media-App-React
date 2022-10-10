import React,{useState,useRef} from 'react'
import "./PostShare.css"
import ProfileImg from "../../img/profileImg.jpg"
import Photo from '@mui/icons-material/PhotoSizeSelectActual';
import Video from '@mui/icons-material/OndemandVideo';
import Location from '@mui/icons-material/LocationOn';
import Schedule from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';

const PostShare = () => {

  const [image,setImage] = useState(null)
  const [video,setVideo] = useState(null)
  const imageRef = useRef();
  const videoRef = useRef();


  return (
    <div className='PostShare'>
      <img className='profileImg' src={ProfileImg} alt=""/>
      <div>
        <input type="text" placeholder="Share What's Happening!"/>
        <div className='PostOptions'>
        <div className='Option' style={{color:"var(--photo)"}} onClick={()=>imageRef.current.click()}>
          <Photo/>
          Photo
        </div>
        <div className='Option' style={{color:"var(--video)"}} onClick={()=>videoRef.current.click()} >
          <Video/>
          Video
        </div>
        <div className="Option" style={{color:"var(--location)"}}>
          <Location/>
          Location
        </div>
        <div className='Option' style={{color:"var(--schedule)"}}>
          <Schedule/>
          Schedule
        </div>
        <button className='button share-btn'>
          Share
        </button>
        <div style={{display:"none"}}>
          <input type="file" name="myImage" ref={imageRef} onChange={(event)=>{
            if (event.target.files && event.target.files[0]){
              const img = event.target.files[0]
              setImage({
                image: URL.createObjectURL(img)
              })
            }
          }}/>

          <input type="file" name="MyVideo" ref={videoRef} onChange={(event)=>{
            if (event.target.files && event.target.files[0]){
              const video = event.target.files[0]
              setVideo({
                vdo : URL.createObjectURL(video)
              })
          }}} />

        </div>
      </div>
      {image && 
      <div className='PreviewImg'>
        <CancelIcon onClick={()=>setImage(null)}/>
        <img src={image.image} alt=""/>
      </div>
      }
      {video &&
      <div className="PreviewVdo">
        <CancelIcon onClick={()=>setVideo(null)}/>
        <video controls autoPlay muted src={video.vdo} ref={videoRef}/>
      </div>
      }
      </div>
      
    </div>
  )
}

export default PostShare