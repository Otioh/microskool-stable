import React, {useContext, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faUser, faPhone, faEdit, faGear, faCoins,faShareAlt,faCheckCircle, faGraduationCap,
   faCopy,faCheck,faInfoCircle,faBell,faDoorOpen,  faArrowCircleLeft,faUserGear,
      faComputer, faList,faGamepad,
  faSearch, faVideo, faPager, faClock, faBook, faCalculator, faMoneyBill1,
  faSearchPlus,
 faEnvelope, faSchool, faUniversity,  faLevelUp, faIdCard} from '@fortawesome/free-solid-svg-icons';
 import GlobalContext from '../Context/GlobalContext';
import { functionSequence } from '../Flame';


function Search() {
  const { toGSS, toAssignment, editProfile, toCalculator, toOutline, theme, toPastQ,toActivate,toReference,toContribute,uploadPix, setSerchArr, toProfile,toSettings,profile, changePassword,  searchArrayList,  logout,   newRoll, toSchedule,notify,newPeriod,referRoll  }=useContext(GlobalContext);
  const [searchTeerm, setsearchTeerm] = useState("");
  const changeSearch=(e)=>{
      setsearchTeerm(e.target.value);
  }
  const moveToEarnings=()=>{
    functionSequence([toProfile, newRoll],1);
  }
  const toRefer=()=>{
    functionSequence([toProfile, referRoll],0.3);
  }
  const toNote=()=>{
    functionSequence([toProfile, notify],0.3);
  }
  const moveToPeriods=()=>{
    functionSequence([toSchedule, toContribute, newPeriod],0.2);
  }
  const moveToPassword=()=>{
    functionSequence([toSettings, changePassword],0.2);
  }
  const toLoggout=()=>{
    functionSequence([toProfile, logout],0.2);
  }
  const toProPix=()=>{
    functionSequence([toProfile, uploadPix],0.2);
  }
const moveToEditProfile=()=>{
  functionSequence([toProfile, editProfile], 0.5)
}

  useEffect(()=>{
    searchArrayList.push({icon:faCoins, description:"Earnings", action:moveToEarnings, tag:"my, my earnings, transfer, transfer earnings, coins, my coins, coins transfer"});
    searchArrayList.push({ icon: faCheck, description: "Activate Account", action: toActivate, tag:"my account, activate, subscribe, pay for microskool"});
    searchArrayList.push({icon:faEdit, description:"Edit Profile", action:moveToEditProfile, tag:"change profile, name, edit department, change department, edit faculty, level, change phone number"});

    searchArrayList.push({icon:faPager, description:"Assignments", action:toAssignment, tag:"my assignments, assignment"})
    searchArrayList.push({ icon: faPager, description: "Past Questions", action: toPastQ, tag: "my questions" })

searchArrayList.push({icon:faUser, description:"My Profile", action:toProfile, tag:`pictures, image, photo, edit, ${profile.fullname}`})
    searchArrayList.push({ icon: faBook, description: "My Semester Courses", action: toOutline, tag: `courses, my outline, course outline, my course outline, edit courses, edit outline, edit my courses, edit  my outline` })

searchArrayList.push({icon:faGear, description:"Settings", action:toSettings, tag:"theme, change, edit, on, off, dark,dark mode, light, light mode,notification, appearance, customize, edit password"})


searchArrayList.push({icon:faSearchPlus, description:"Reference", action:toReference, tag:"courses, list, course code, title, department"})

searchArrayList.push({icon:faClock, description:"Lecture Schedule", action:toSchedule, tag:"Time-Table, time, table, period, class, add, add period, add time, edit time"})

searchArrayList.push({icon:faClock, description:"Add Period to Time Table", action:moveToPeriods, tag:"Time-Table, time, table, period, class, add, add period, add time, edit time, contribute to time table"})

searchArrayList.push({icon:faPager, description:"General Studies", action:toGSS, tag:"exams, lectures, edit, syllabus, online contest"})

searchArrayList.push({icon:faUserGear, description:"Change Password", action:moveToPassword, tag:"password, security, account settings, edit password"})

searchArrayList.push({icon:faShareAlt, description:"Refer & Earn", action:toRefer, tag:"refer friends, refer a friend, earn coins, referral link, share link"})

searchArrayList.push({icon:faBell, description:"Earnings Notifications", action:toNote, tag:"earnings, alert, credit, new coins, report, accouunt"})

searchArrayList.push({icon:faPowerOff, description:"Logout", action:toLoggout, tag:"switch account, log me out"})

searchArrayList.push({icon:faUser, description:"Upload Profile Picture", action:toProPix, tag:"avatar, change profile picture, image"})

searchArrayList.push({icon:faPager, description:"General Studies", action:toGSS, tag:"exams, lectures, edit, syllabus, online contest"})

searchArrayList.push({icon:faPager, description:"General Studies", action:toGSS, tag:"exams, lectures, edit, syllabus, online contest"})

searchArrayList.push({icon:faPager, description:"General Studies", action:toGSS, tag:"exams, lectures, edit, syllabus, online contest"})

searchArrayList.push({icon:faCalculator, description:"GPA Calculator", action:toCalculator, tag:"my calculator, calculator, gpa, cgpa calculator"})


    setSerchArr(searchArrayList);


}, [searchArrayList])










  return (
    <>
    <div className="row">
<div className="col-sm-8"><br/><br/>
<div className="search-form">
    <div className="form-group">
<input className={`form-control ${theme}`} type="search" placeholder='Search Anything' onChange={changeSearch} />
    </div>

</div>
<div className="row">
<ul className='list-group'>
{

searchArrayList.filter((searchItem) => { if(searchTeerm===""){
  return null;
}else if(searchItem.description.toLowerCase().includes(searchTeerm.toLowerCase()) || searchItem.tag.toLowerCase().includes(searchTeerm.toLowerCase())){
return searchItem;
}
else{
  return null;
}
}).map((searchItem, key)=>{
  return <li key={key} className={`list-group-item d-flex justify-content-between align-items-center ${theme}`} onClick={searchItem.action}>
  <FontAwesomeIcon icon={searchItem.icon}/>
  <p className='list-group-item-text'>{searchItem.description}</p>
  </li>
  
})  
}

</ul>

</div>

</div>
<div className="col-sm-4">

</div>

    </div>
    
    </>
  )
}

export default Search