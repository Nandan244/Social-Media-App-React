import React from 'react'
import "./LogoSearch.css"
import Logo from "../../img/logo.png"
import SearchIcon from '@mui/icons-material/Search';

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
      <img src={Logo} className="Logo"/>
      <div className='Search'>
        <input alt='Logo' type="text" placeholder="Explore here"/>
        <div className='searchIcon'>
          <SearchIcon/>
        </div>
        
      </div>
    </div>
  )
}

export default LogoSearch