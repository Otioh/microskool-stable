import React, {useContext, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone,faBackward, faEnvelope, faSchool, faUniversity,  faLevelUp} from '@fortawesome/free-solid-svg-icons';
import {  faCaretSquareDown } from '@fortawesome/free-regular-svg-icons';
import GlobalContext from '../Context/GlobalContext';
import axios from 'axios';
import { message } from 'antd';


function UserProfile(props) {
  const {theme,toContribute }=useContext(GlobalContext);

const [profile, setProfile] = useState({});

  useEffect(() => {  
    
    message.loading("Please Wait");
    axios.get('https://microskool.com/api/server/profile.php?email='+props.user).then(res=>{
    message.destroy()
    setProfile(res.data);
  })

    return () => {
  
    }
  }, [props.user])

  return (
    <div className='container'>
            <br/>
      <button onClick={toContribute} className='btn'>
      <FontAwesomeIcon icon={faBackward} />  Back
      </button>

    <div className="row">
    
        <div className="col-sm-9">
        <br/>
<br/>
User Details
<div className='row'>
  <center>
<div className='col-sm-12'>
<div className="user-image" >

<img src={profile.image} alt="User" />




</div>
<h5>{profile.fullname}</h5>
</div>
</center>
</div>


<div className="row">
 
  <div className="col-sm-4">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card ${theme}`}>
<div className='card-title'><> {profile.department}</></div>
 <i className='tag'> <h > <FontAwesomeIcon icon={faSchool} /> Department </h></i>
</div>
  </div>



  <div className="col-sm-4">
  <div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card ${theme}`}>
  <div className='card-title'><>{profile.institution}</> </div>
<i className='tag'> <h> <FontAwesomeIcon icon={faUniversity} /> Campus </h> </i>
</div>
  </div>

  <div className="col-sm-4">
  <div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card ${theme}`}>
  <div className='card-title'><>{profile.level}</></div>
<i className='tag'><h > <FontAwesomeIcon icon={faLevelUp} /> Level </h></i>
</div>
  </div>

  </div>

  <div className="row">
  <div className="col-sm-4">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card ${theme}`}>
<div className='card-title'><> {profile.phone}</></div>
 <i className='tag'> <FontAwesomeIcon icon={faPhone} /> Phone </i>
</div>
  </div>
  <div className="col-sm-4">
  <div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card  ${theme}`}>
  <div className='card-title'><>{profile.email}</></div>
<i className='tag'><h > <FontAwesomeIcon icon={faEnvelope} /> Email</h> </i>
</div>
  </div>

  <div className="col-sm-4">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card ${theme}`}>
<div className='card-title'><> {profile.faculty}</></div>
 <i className='tag'><h >  <FontAwesomeIcon icon={faCaretSquareDown} /> Faculty </h></i>
</div>
  </div>

  </div>

  <div className="row">
  
  
  </div>


        </div>
        </div>
    
    
    

    </div>
  )
}

export default UserProfile;