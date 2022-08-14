import React, { useContext, useEffect} from 'react';
import MicroskoolIcon from '/Users/Erim/Documents/GitHub/microskool-stable/src/ImageResources/micro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,  faArrowCircleLeft, faArrowCircleRight, 
     faBookOpenReader, faGear, faUser, faComputer, faList,faGamepad,
    faSearch, faVideo, faPager, faClock, faBook, faCalculator, 
    faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../Context/GlobalContext';
import SubMenus from './SubMenus';
import Popup from './Popup';
import {message} from 'antd';
import {useNavigate} from 'react-router-dom';
import Loader from '../Loader';
import Roll from '../Roll';


function Dashboard() {
    const {fall,setloader,newItems, setfall,setDropDown, dropDown, theme,  history, toSearch,toHome,toAssignment,toSchedule,toPastQ,toCalculator,toProfile,toReference,toSettings,content, profile}=useContext(GlobalContext);
   let navigate = useNavigate();
   if(sessionStorage.getItem("session")==="" || sessionStorage.getItem("session")===null){
message.info("No Session Please Login");
    navigate("/signin");
   }
   useEffect(()=>{
    setloader(false);
   })
    const ToggleFall=()=>{
        if(fall===false){setDropDown(false)}
        setfall(!fall);}
  
useEffect(() => {
  setTimeout(() => {
    toHome();
  }, 4000);

  
}, [])


  return (
    <>
    <Loader/>
    <Popup />
   <div className="bg">
        <div className='side-panel'>
<div className={`side-bar ${theme} ${fall===true?"fall":""}`}>
<div className='top-section'>
<img className="navbar-brand icon" alt='Microskool-Logo' src={MicroskoolIcon} href="welcome" />
{fall===false? <span className='toggle-btn' onClick={ToggleFall}>
<FontAwesomeIcon icon={faArrowCircleLeft}/>
    </span>
:
    <span className='toggle-btn-out' onClick={ToggleFall}>
<FontAwesomeIcon icon={faArrowCircleRight}/>
    </span>
}
</div>


<div className={`menu-item  ${history[history.length-1]==="toSearch"? "active":""}`} onClick={toSearch}>
    <div className="icon-holder">
<FontAwesomeIcon icon={faSearch}/>
</div>
<text style={{display:fall===true?"none":"block"}}>Search</text>
</div>

<div className={`menu-item ${history[history.length-1]==="toHome"? "active":""}`} onClick={toHome}>
    <div className="icon-holder">
    
<FontAwesomeIcon icon={faHome}>
   
</FontAwesomeIcon>

</div>
<text style={{display:fall===true?"none":"block"}}>Home</text>
</div>

<div  className={`menu-item ${history[history.length-1]==="toGSS" || history[history.length-1]==="toCBT"? "active":""}`} onClick={()=>{setDropDown(!dropDown)}}>
    <div className="icon-holder">
<img style={{width:'30px',height:"30px", borderRadius:"50%"}} src={profile.campuslogo} alt="" />
</div>
<text style={{display:fall===true?"none":"block"}}>General Studies</text>

</div>


<div style={dropDown===false?{display:"none"}:{display:"inline-block"}} className={`sub-menus ${theme}`}>
    {
        newItems.map((items)=>{
            return <SubMenus items={items} />
        })
    }

</div>


<div className={`menu-item ${history[history.length-1]==="toAssignment"? "active":""}`} onClick={toAssignment}>
    <div className="icon-holder">
   
<FontAwesomeIcon icon={faPager}/>
</div>
<text style={{display:fall===true?"none":"block"}}>Assignments</text>
</div>

<div className={`menu-item ${history[history.length-1]==="toSchedule"? "active":""}`} onClick={toSchedule}>
    <div className="icon-holder">
    
<FontAwesomeIcon icon={faClock}/>
</div>
<text style={{display:fall===true?"none":"block"}}>Lecture Schedule</text>
</div>

<div className={`menu-item ${history[history.length-1]==="toPastQ"? "active":""}`} onClick={toPastQ}>
    <div className="icon-holder">
    <span className='new-info'>4</span>
<FontAwesomeIcon icon={faBook}/>
</div>
<text style={{display:fall===true?"none":"block"}}>Past Questions</text>
</div>

<div className={`menu-item ${history[history.length-1]==="toCalculator"? "active":""}`} onClick={toCalculator}>
    <div className="icon-holder">
<FontAwesomeIcon icon={faCalculator}/>
</div>
<text style={{display:fall===true?"none":"block"}}>GPA Calculator</text>
</div>

<div className={`menu-item ${history[history.length-1]==="toReference"? "active":""}`} onClick={toReference}>
    <div className="icon-holder">
<FontAwesomeIcon icon={faSearchPlus}/>
</div>
<text style={{display:fall===true?"none":"block"}}>Course Reference</text>
</div>

<div className={`menu-item ${history[history.length-1]==="toProfile"? "active":""}`} onClick={toProfile}>
    <div className="icon-holder">
   
<FontAwesomeIcon icon={faUser}/>
</div>
<text style={{display:fall===true?"none":"block"}}>Profile</text>
</div>

<div className={`menu-item ${history[history.length-1]==="toSettings"? "active":""}`} onClick={toSettings}>
    <div className="icon-holder">
<FontAwesomeIcon icon={faGear}/>
</div>
<text style={{display:fall===true?"none":"block"}}>Settings</text>
</div>

</div>
        </div>
        <div className={`main-panel inner-${theme} ${fall===true?"fall":""}`}>


{content}




        </div>

 
    
        </div>  
        <Roll/>  
    </>
  )
}

export default Dashboard;