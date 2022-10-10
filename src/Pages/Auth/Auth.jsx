import React, { useState } from 'react'
import "./Auth.css"
import Logo from "../../img/logo.png";




const Auth = () => {

  const [isSignUp , setIsSignUp] = useState(true);
  
  const [formData,setFormData] = useState({firstname:"",lastname:"",username:"",password:"","confirmpassword":""})
  const [passwordCheck,setPasswordCheck] = useState(true)
  const handleChange = (event)=>{
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  const resetForm = ()=>{
    setPasswordCheck(true);
    setFormData({firstname:"",lastname:"",username:"",password:"","confirmpassword":""})
  }
  return (
    <div className="Auth">
        <div className='auth-left '>
            <img src={Logo} alt="Logo"/>
            <div className='Appname'>
                <h1>Media Hub</h1>
                <h6>Explore Your Thoughts And Ideas</h6>
            </div>
        </div>

        <div className="auth-right ">
       
       <form className="InfoForm authForm ">
        <h3>{isSignUp?"Sign Up":"Login"}</h3>

        {isSignUp && 
          <div>
          <input type="text" 
           placeholder="First Name"
           name='firstname' 
           className='infoInput'
           onChange={handleChange}
           value={formData.firstname}
           />
          <input 
            type="text"
            className='infoInput'
            placeholder="Last Name"
            name='lastname'
            onChange={handleChange}
            vale={formData.lastname}
          />
        </div>
        }

        <div>
          <input
            type="text"
            placeholder='Username'
            className='infoInput'
            name='username'
            onChange={handleChange}
            value={formData.username}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className='infoInput'
            name='password'
            onChange={handleChange}            
            value={formData.password}
          />
          {isSignUp && 
            <input
           type="password"
           placeholder="Confirm Password"
           className='infoInput'
           name='confirmpassword'
           onChange={handleChange}
           value={formData.confirmpassword}
          />
          }
        </div>
          <span
          style={{
            display:passwordCheck?"none":"block",
            color:"red",
            fontSize:"12px",
            alignSelf:"flex-end",
            marginRight:"5px"
          }}
          >*Confirmed password is not same</span>
        <div>
          <span style={{fontSize:"12px",cursor:"pointer"}} onClick={()=>{setIsSignUp((prev)=>!prev);resetForm();}}>
          {isSignUp?"Already Have An Account? Login":"Don't Have An Account? SignUp"}
          </span>

        </div>
        <button className="button info-btn" type='submit' >{isSignUp ? "Sign Up" : "Login"}</button>

       </form>

    </div>
    </div>
  )
}





export default Auth