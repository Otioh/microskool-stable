import React, {useContext, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faUser, faPhone, faEdit, faUserEdit, faCoins,faShareAlt,faCheckCircle, faGraduationCap,
   faUserTimes,faUserCheck,faInfoCircle,faBell,faTimes, faUserGear,
 faEnvelope, faSchool, faUniversity,  faLevelUp, faIdCard, faBookOpenReader} from '@fortawesome/free-solid-svg-icons';
import { faAddressBook, faCaretSquareDown, faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import GlobalContext from '../Context/GlobalContext';
import Roll from '../Roll';
import ProfilePixUpload from './ProfilePixUpload';
import EditProfile from './EditProfile';


function Profile() {
  const { theme, uploadPix,toOutline, MyCourses, editProfile, closeRoll, newRoll,  logout,   gotoSettings,notify,referRoll, profile, setpopTitle,setPop, setPopMessage }=useContext(GlobalContext);

  useEffect(() => {
  
    return () => {
      closeRoll();
    }
  }, [])
  return (
    <div className='container'>
    <div className="row">
    
        <div className="col-sm-10">
        <br/>
<br/>
User Details
<div className='row'>
  <center>
<div className='col-sm-12'>
<div className="user-image" onClick={uploadPix}>

<img src={profile.image} alt="User" />




</div>
</div>
</center>
</div>


<div className="row">
  <div className="col-sm-4">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'> {profile.fullname}</div>
 <i className='tag'>
  <h >
  <FontAwesomeIcon icon={faUser} /> Name</h> </i>
</div>
  </div>
  <div className="col-sm-4">
  <div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
  <div className='card-title'><>{profile.code}</></div>
<i className='tag'> <h > <FontAwesomeIcon icon={faIdCard} /> JAMB Reg No </h></i>
</div>
  </div>

  <div className="col-sm-4">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'><FontAwesomeIcon style={{fontSize:"14pt",color:profile.status==="Active"?"lightgreen":"red"}} icon={profile.status!=="Active"?faUserTimes:faUserCheck} /> {profile.status}</div>
 <i className='tag'>

  <h>
  <FontAwesomeIcon icon={faUserCheck} /> Account Status</h> </i>
</div>
  </div>


  </div>



  <div className="row">
  <div className="col-sm-4">
  <div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
  <div className='card-title'><>{profile.gpa}</></div>
<i className='tag'> <h > <FontAwesomeIcon icon={faGraduationCap} /> Current CGPA </h></i>
</div>
  </div>

  <div className="col-sm-4">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'><> {profile.department}</></div>
 <i className='tag'> <h > <FontAwesomeIcon icon={faSchool} /> Department </h></i>
</div>
  </div>



  <div className="col-sm-4">
  <div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
  <div className='card-title'><>{profile.institution}</> </div>
<i className='tag'> <h> <FontAwesomeIcon icon={faUniversity} /> Campus </h> </i>
</div>
  </div>
  </div>

  <div className="row">
  <div className="col-sm-4">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'><> {profile.phone}</></div>
 <i className='tag'> <FontAwesomeIcon icon={faPhone} /> Phone </i>
</div>
  </div>
  <div className="col-sm-4">
  <div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
  <div className='card-title'><>{profile.email}</></div>
<i className='tag'><h > <FontAwesomeIcon icon={faEnvelope} /> Email</h> </i>
</div>
  </div>

  <div className="col-sm-4">
<div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
<div className='card-title'><> {profile.faculty}</></div>
 <i className='tag'><h >  <FontAwesomeIcon icon={faCaretSquareDown} /> Faculty </h></i>
</div>
  </div>

  </div>

  <div className="row">
  <div className="col-sm-8">
  <div style={{border:"solid 2px lightgray", boxShadow:"none"}} className={`card microskool-card ${theme}`}>
  <div className='card-title'><>{profile.level}</></div>
<i className='tag'><h > <FontAwesomeIcon icon={faLevelUp} /> Level </h></i>
</div>
  </div>

  </div>


        </div>
             <div className="col-sm-2">
        Semester Courses <button className='btn' onClick={toOutline}>
        <FontAwesomeIcon icon={faEdit} />
</button>
          <div className={`card microskool-card ${theme}`}>


<ul className={`list-group bg-secondary ${theme}`}>
      {
                MyCourses.map((course, key)=>{
                  return <li key={key} className={`list-group-item d-flex justify-content-between align-items-center ${theme}`}>
                    <p className={`list-group-item-text `}>{course.code}</p>
                 
                  </li>
                })
      }
        

        

      </ul>


        </div>

    </div></div>
    
    
    
    <div className={`pro-footer ${theme} `}>
<button className='footer-btn-icon microskool-text-pink' title='Edit Profile' onClick={editProfile}>
<FontAwesomeIcon icon={faUserEdit} />
</button>

<button className='footer-btn-icon' onClick={gotoSettings} title="Account Settings">
<FontAwesomeIcon icon={faUserGear} />
</button>

<button className='footer-btn-icon microskool-text-success' onClick={referRoll} title="Refer a Friend">
<FontAwesomeIcon icon={faShareAlt} /> 
</button>

<button className='footer-btn-icon microskool-text-gold' onClick={newRoll} title="Your Earnings">
<FontAwesomeIcon icon={faCoins} /> 
</button>

<button className='footer-btn-icon microskool-text-purple' onClick={notify} title="Earnings Notification">

<FontAwesomeIcon icon={faBell} /> 
</button>

<button className='footer-btn-icon microskool-text-danger'  onClick={logout} title="Logout">
<FontAwesomeIcon icon={faPowerOff} />
</button>
    </div>
   

    </div>
  )
}

export default Profile;