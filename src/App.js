import "./App.css"
import React from "react"
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Auth from "./Pages/Auth/Auth"
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        
        <div className="blur blur1" style={{top: '-18%',right:'0rem',backgroundColor:'#6eb6cf'}}></div>
        <div className="blur blur2" style={{top:'14%',left:'-8rem',backgroundColor:'#6eb6cf'}}></div>
        
        <div>
        <BrowserRouter>
          <Routes>
          <Route exact  path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/profile" element={<Profile/>} />
          </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
