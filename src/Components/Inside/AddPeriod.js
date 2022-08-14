import React, {useContext, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave} from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../Context/GlobalContext';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import {message} from 'antd';



  function AddPeriod() {
    const {courses, theme, closePop, setRoll}=useContext(GlobalContext);
    const [Time_In, setTime_In] = useState("")
    const [Time_Out, setTime_Out] = useState("")
    const [Course, setCourse] = useState("")
    const [venue, setvenue] = useState("")
    const [day, setday] = useState("")


    const savePeriod=()=>{
   

      if(Time_In==="" || Time_Out==="" || Course==="" || venue==="" || day===""){
        message.warning("All Fields are required");
      }else{
        axios.get(`https://microskool.com/app/saveperiod.php?email=${sessionStorage.getItem("session")}&&code=${Course}&&day=${day}&&timein=${Time_In}&&timeout=${Time_Out}&&venue=${venue}`).then((res)=>{
if(res.data==="success"){
  message.success("Added Succesfully");
}else{
  message.error(res.data);
}
})
    }

    closePop();
  }

 
   


  return (
    <div className='container'><div className='row'>
        <div className='col-sm-4'>
        <input className={`form-control ${theme}`} list='browser' placeholder='Course Code' onChange={(e)=>{
setCourse(e.target.value)
}} />
<datalist id="browser">
  {courses.map((course, key)=>{
    return  <option key={key} value={course.code}>{course.title}</option>
  })}
 
</datalist>
        </div>
        <div className='col-sm-4' >
<select className={`form-control ${theme}`} onChange={(e)=>{
setTime_In(e.target.value)
}} > 
    <option>
Time_In
    </option>
    <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12NOON">12NOON</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
</select>
</div>
<div className='col-sm-4'>
<select className={`form-control ${theme}`} onChange={(e)=>{
setTime_Out(e.target.value)
}} >
    <option>
Time_Out
    </option>
    <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12NOON">12NOON</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
</select>
</div>
        </div>
        
        <div className='row'>
        <div className='col-sm-4'>
        <input className={`form-control ${theme}`}  placeholder='Venue' onChange={(e)=>{
setvenue(e.target.value);
}} />
        </div>
        <div className='col-sm-4'>
        <select className={`form-control ${theme}`} onChange={(e)=>{
setday(e.target.value)
}} >
    <option>
Day
    </option>
    <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
</select>
</div>
<div className='col-sm-4'>
<button className={`btn btn-${theme} form-control`}  onClick={savePeriod} >
    <FontAwesomeIcon icon={faSave}/>
</button>
</div>
        </div>
        
        </div>
  )
}

export default AddPeriod