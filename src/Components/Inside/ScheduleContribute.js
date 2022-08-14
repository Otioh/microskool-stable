import React, {useContext, useEffect,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faThumbsUp, faThumbsDown, faUser, faAdd} from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../Context/GlobalContext';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import AddPeriod from './AddPeriod';
import axios from 'axios';
import { message } from 'antd';


function ScheduleContribute() {
  const {closeRoll,toUserProfile,newPeriod, setRoll,timeTable, theme,toProfile, toSchedule, setpopTitle,setPop, setPopMessage}=useContext(GlobalContext);
  useEffect(() => {
    setRoll("Guide", <div>Any Period that receives more Wrong Votes than Correct Votes would be removed from schedule</div>, "150px")  
    return () => {
      closeRoll();
    }
  }, [])

  return (
    <div>
      <br/>
      <button onClick={toSchedule} className='btn'>
      <FontAwesomeIcon icon={faBackward} />  Back
      </button><br/><br/>
      <div className="title">
       <h4>Daily Periods </h4>
</div>
<div className='row'>
  <div className='col-sm-6'>
    <button className={`btn btn-${theme} `} style={{margin:"5px"}} onClick={newPeriod}>
    <FontAwesomeIcon icon={faAdd} /> Add
    </button>
  <ul className={`list-group bg-secondary ${theme}`}>
  {timeTable.map((period, key)=>{
return   <>     <li  className={`list-group-item d-flex justify-content-between align-items-center ${theme}`}>
          <b className={`list-group-item-text `}>{period.course}</b>
          <text>
            {period.time_in} - {period.time_out} <br/>{period.venue}
          </text>
         <text>
          <FontAwesomeIcon icon={faClock} /> {period.day.substring(0,3)}
         </text>
        </li>

<span className={`inner-${theme}`} style={{display:"inline", marginBottom:"5px"}}>
<button className='btn' style={period.voted==="true" && period.votetype==="correct"? {color:"rgb(83,83,170)"}:{}} onClick={()=>{

      axios.get(`https://microskool.com/app/voteperiod.php?email=${sessionStorage.getItem("session")}&&id=${period.id}&&vote=correct`).then((res)=>{
if(res.data==="success"){
  message.success("Voted");
}else{
  message.info(res.data);
}
})               }}>
         <FontAwesomeIcon icon={faThumbsUp} /> {period.correct}
        </button>
        <button className='btn' style={period.voted==="true" && period.votetype==="wrong"? {color:"rgb(83,83,170)"}:{}} onClick={()=>{
      axios.get(`https://microskool.com/voteperiod.php?email=${sessionStorage.getItem("session")}&&id=${period.id}&&vote=wrong`).then((res)=>{
  if(res.data==="success"){
    message.success("Voted");
  }else{
  message.info(res.data);}
})
          
          }}>
         <FontAwesomeIcon icon={faThumbsDown} /> {period.wrong}
        </button>
        <i style={period.user_email===sessionStorage.getItem('session')?{color:"rgb(83,83,170)", float:"right"}:{color:"lightgray", float:"right"}} onClick={()=>{period.user_email===sessionStorage.getItem('session')? toProfile():toUserProfile(period.user_email)}}>
 <FontAwesomeIcon  icon={faUser} /> {period.user_email===sessionStorage.getItem('session')?" You": period.user.substring(0,9)}...
 </i> 
        </span>
 
 </>
  })
}
</ul>
  </div>
</div>
    </div>
  )
}
export default ScheduleContribute;