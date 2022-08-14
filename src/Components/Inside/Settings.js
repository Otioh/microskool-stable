import React, {useContext, useEffect, useState} from 'react';
import GlobalContext from '../Context/GlobalContext';
import axios from 'axios';
import {Switch, Radio, Checkbox} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGear, faDisplay, faBell, faUserGear, faEdit, faCheck, faWarning, faQuestion, faDownload} from '@fortawesome/free-solid-svg-icons';



function Settings() {
  const { theme, settheme, toActivate, setpopTitle, setPopMessage, setPop, changePassword}=useContext(GlobalContext);
const [dark, setdark] = useState(()=>{
  if(theme==="dark"){return true}else{return false}
})


useEffect(() => {
  if(dark===true){
    settheme('dark')
  }else{
    settheme('light')
  }
  axios.get(`https://microskool.com/api/server/settheme.php?email=${sessionStorage.getItem("session")}&&theme=${theme}`).then((res)=>{

})

}, [theme, dark, settheme])



  return (
    <div className='container'>
<div className='row'>

<div className="col-sm-5">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'>
<div style={{marginBottom:"15px"}}>
<h6>Language</h6>
<label>
  English
</label><span style={{float:"right"}}>
<Radio checked /></span>
</div></div>
 <i className='tag'> <h > <FontAwesomeIcon icon={faGear} /> General Settings </h></i>
</div>
  </div>

  <div className="col-sm-5">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'>
<h6>Account Status</h6>
Activate <span style={{float:"right"}}><button className="btn btn-primary"> <FontAwesomeIcon icon={faCheck} onClick={toActivate} /> </button></span>
<br/><br/>
<h6>Password</h6>
Change Password <span style={{float:"right"}}><button className="btn btn-primary" onClick={changePassword} > <FontAwesomeIcon icon={faEdit} /> </button></span>

</div>
 <i className='tag'> <h > <FontAwesomeIcon icon={faUserGear} /> Security/Account Settings </h></i>
</div>
  </div>

  <div className="col-sm-5">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'>
<div style={{marginBottom:"15px"}}>
<h6>Notification Medium</h6>
<label>
  E-Mails
</label><span style={{float:"right"}}>
<Checkbox checked /></span>
<br/>
<label>
  SMS
</label><span style={{float:"right"}}>
<Checkbox checked /></span>

<br/>
<label>
  Push 
</label><span style={{float:"right"}}>
<Checkbox checked /></span>
<br/><br/>
<h6>Notification Frequency</h6>
<label>
  Regular
</label><span style={{float:"right"}}>
<Radio checked /></span>
<br/>
<label>
  Daily
</label><span style={{float:"right"}}>
<Radio  /></span>

<br/>
<label>
  Weekly 
</label><span style={{float:"right"}}>
<Radio  /></span>

</div>
</div>
 <i className='tag'> <h > <FontAwesomeIcon icon={faBell} /> Notification Settings </h></i>
</div>
  </div>

  <div className="col-sm-5">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'><> 
<div style={{marginBottom:"15px"}}>
<h6>Theme</h6>
Toggle Dark Mode <span style={{float:"right"}}>{dark===true?<Switch defaultChecked onChange={()=>{
setdark(!dark);
}} />:<Switch onChange={()=>{
  setdark(!dark);
  }} />} </span>
</div>
<div style={{marginBottom:"15px"}}>
<h6>Side Navigation</h6>
Always Fall Navigation Bar (Default) <span style={{float:"right"}}><Switch defaultChecked onChange={()=>{

}} /></span>

</div>
</></div>
 <i className='tag'> <h > <FontAwesomeIcon icon={faDisplay} /> Appearance Settings </h></i>
</div>
  </div>

  <div className="col-sm-5">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'>
<div style={{marginBottom:"15px"}}>
<h6>Feedback</h6>
Report a problem <span style={{float:"right"}}><button className="btn btn-primary"> <FontAwesomeIcon icon={faWarning} /> </button></span>
</div>
</div>
 <i className='tag'> <h > <FontAwesomeIcon icon={faGear} /> Support </h></i>
</div>
  </div>

    <div className='col-sm-5'>
    <div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'>
<h6>About Microskool</h6>
&copy; Microskool 2022 --- version 2.5.0 -- Click to Install <span style={{float:"right"}}><a href="http://microskool.com/downloads" className="btn btn-primary"><FontAwesomeIcon icon={faDownload} /> </a></span>

</div>
<br/>
 <i className='tag'> <h > <FontAwesomeIcon icon={faGear} /> Powered by <a href="https://firsta.com.ng/" target="__blank">Firsta</a> </h></i>
</div>

    </div>

</div>

    </div>
  )
}

export default Settings;