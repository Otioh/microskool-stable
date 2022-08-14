import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,  faArrowCircleLeft, faArrowCircleRight, faCoins,
faBookOpenReader, faGear, faUser, faComputer, faList,faGamepad,
faSearch, faVideo, faPager, faClock, faBook, faCalculator, 
faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../Context/GlobalContext';
import {functionSequence} from '../Flame'

function Home() {
  const {fall,toProfileToEarnings,profile, newRoll, toCBT,setPop,closePop,setpopTitle,setPopMessage, setfall,setDropDown, dropDown, theme,  history, toSearch,toHome,toGSS,toAssignment,toSchedule,toPastQ,toCalculator,toProfile,toReference,toSettings,content}=useContext(GlobalContext);

  return (
    <div className="container"> <div className="row"><div className="col-sm-12">  
    <div className="user-image-home" onClick={toProfile}>
<img src={profile.image} alt="User" />
</div>

    </div> </div>
    
    <div className="row">
<div className="col-sm-6">
<div style={{width:"120px", float:"left", margin:"5px", cursor:"pointer"}} className={`microskool-card ${theme}`} onClick={()=>{setDropDown(!dropDown)}}>
<center>
<div style={{fontSize:"37pt"}}>
<img style={{width:'55px',height:"55px", borderRadius:"50%"}} src={profile.campuslogo} alt="" />
</div>
<i style={{fontSize:"7pt"}}>General Studies</i>
</center>
</div>


<div style={{width:"120px", float:"left", margin:"5px", cursor:"pointer"}} className={`microskool-card ${theme}`} onClick={toAssignment}>
<center>
<div style={{fontSize:"37pt"}}>
<FontAwesomeIcon icon={faPager} />
</div>
<i style={{fontSize:"7pt"}}>Assignments</i>
</center>
</div>




<div style={{width:"120px", float:"left", margin:"5px", cursor:"pointer"}} className={`microskool-card ${theme}`} onClick={toSchedule}>
<center>
<div style={{fontSize:"37pt"}}>
<FontAwesomeIcon icon={faClock} />
</div>
<i style={{fontSize:"7pt"}}>Time-Table</i>
</center>
</div>


<div style={{width:"120px", float:"left", margin:"5px", cursor:"pointer"}} className={`microskool-card ${theme}`} onClick={toPastQ}>
<center>
<div style={{fontSize:"37pt"}}>
<FontAwesomeIcon icon={faBook} />
</div>
<i style={{fontSize:"7pt"}}>Past Questions</i>
</center>
</div>


<div style={{width:"120px", float:"left", margin:"5px", cursor:"pointer"}} className={`microskool-card ${theme}`} onClick={toCalculator}>
<center>
<div style={{fontSize:"37pt"}}>
<FontAwesomeIcon icon={faCalculator} />
</div>
<i style={{fontSize:"7pt"}}>GPA Calculator</i>
</center>
</div>

<div style={{width:"120px", float:"left", margin:"5px", cursor:"pointer"}} className={`microskool-card ${theme}`} onClick={toReference}>
<center>
<div style={{fontSize:"37pt"}}>
<FontAwesomeIcon icon={faSearchPlus} />
</div>
<i style={{fontSize:"7pt"}}>Course Reference</i>
</center>
</div>



<div style={{width:"120px", float:"left", margin:"5px", cursor:"pointer"}} className={`microskool-card ${theme}`} onClick={toProfile}>
<center>
<div style={{fontSize:"37pt"}}>
<FontAwesomeIcon icon={faUser} />
</div>
<i style={{fontSize:"7pt"}}>Profile</i>
</center>
</div>


<div style={{width:"120px", float:"left", margin:"5px", cursor:"pointer"}} className={`microskool-card ${theme}`} onClick={()=>{
  functionSequence([toProfile, newRoll], 1);
}}>
<center>
<div style={{fontSize:"37pt"}}>
<FontAwesomeIcon icon={faCoins} />
</div>
<i style={{fontSize:"7pt"}}>Earnings</i>
</center>
</div>


<div style={{width:"120px", float:"left", margin:"5px", cursor:"pointer"}} className={`microskool-card ${theme}`} onClick={toSettings}>
<center>
<div style={{fontSize:"37pt"}}>
<FontAwesomeIcon icon={faGear} />
</div>
<i style={{fontSize:"7pt"}}>Settings</i>
</center>
</div>


<div style={{width:"120px", float:"left", margin:"5px", cursor:"pointer"}} className={`microskool-card ${theme}`} onClick={toSearch}>
<center>
<div style={{fontSize:"37pt"}}>
<FontAwesomeIcon icon={faSearch} />
</div>
<i style={{fontSize:"7pt"}}>Search</i>
</center>
</div>

</div>
<div className="col-sm-6">
<div className={`microskool-card ${theme}`}>
  <div className='card-header '>
    <h4 className='card-title '>General Studies</h4>

  </div>
  <div className='card-body '>
<p>Get Started Here to enjoy our premium lectures on all General Studies in your Institution at affordable rate.</p>
<p> Premium lectures gives you a clearer understanding of every topic covered in all the General Studies Syllabus. You also have access to ask questions
   and get answers on any subject, from our qualified Remote Lecturers of each course for better understanding </p>
  
<p>
  Our General Studies comes with a free CBT system and General Studies Exams Model for you to Practise, rate yourself and prepare for your General Studies Exams. 
</p>
  </div>
<div className='card-footer'>
<button className='microskool-button' onClick={toGSS}>Get Started <FontAwesomeIcon icon={faArrowCircleRight} /> </button> 
</div>
</div>

</div>
    </div>
    
    <div className='row'>
      <div className='col-sm-8'>
      </div>
      <div className='col-sm-2'>

      </div>


    </div>


    </div>
  )
}

export default Home;