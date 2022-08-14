import React, {useState, useEffect, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faLock, faUserLock} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import NavBar from './NavBar';
import GlobalContext from '../Context/GlobalContext';
import Loader from '../Loader';

function Login() {
  const {isLoggin, setloader, setIsLoggin, setprofile,settheme, setCourses, setNotification, profile}=useContext(GlobalContext);
useEffect(()=>{
  setloader(false);
})
let navigate=useNavigate();
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const Login =()=>{
  setloader(true);
if(email==="" || password===""){
  message.warn("All Fields are Required")
  setloader(false);
  return null;
}
message.loading("Authenticating", 30);
  axios.get('http://192.168.43.31/microskool2.1/api/server/login.php?email='+email+'&&password='+password).then(
    response=>{
        message.destroy()
          let result =response.data;     
    if(result==='success'){
    message.success("Login Successful")
    sessionStorage.setItem("session", email)
    setIsLoggin(true) 
      axios.get('http://192.168.43.31/microskool2.1/api/server/profile.php?email='+email).then(
      res=>{

setprofile(res.data);
          axios.get('http://192.168.43.31/microskool2.1/api/server/notify.php?email='+sessionStorage.getItem("session")).then(
  newres=>{

    setNotification(newres.data);
    

  
  })  


          axios.get('http://192.168.43.31/microskool2.1/api/server/allcourse.php').then(
  newres=>{

    setCourses(newres.data);
    setTimeout(() => {
        navigate("/campus");
     }, 3000);
   
  })  
      })  
    
     
    
    }else{
      message.error(result)
      setloader(false);
    }
      }
    )
}

  return (
    <>
    <NavBar/>
    <Loader/>
    <div className='pane micro-margin'>
  <div className='row'>
<div className="col-sm-4">
</div>

<div className="col-sm-4">
<div className='card microskool-card bg-white'>
<div className='form'>
      <legend >Login Now</legend>
      <div className='form-group  micro-margin'>
      <FontAwesomeIcon icon={faEnvelope}/>
      <input type="email" value={email}  className='form-control' placeholder="E-Mail" id="email" onChange={(e)=>{
        setemail(e.target.value);
      }} />
      </div>
      <div className='form-group micro-margin'>
      <FontAwesomeIcon icon={faLock}/>
      <input  type="password" value={password}  className='form-control' placeholder=" Password" id="password" onChange={(e)=>{
        setpassword(e.target.value);
      }} />
      </div>
</div>
<button className="microskool-button" onClick={Login} > 
  <FontAwesomeIcon icon={faUserLock}/> Login</button>
</div>
</div>
<div className="col-sm-4">
</div>
  </div>
</div>

    </>
  )
}
export default Login;