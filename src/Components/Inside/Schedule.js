import React, {useContext, useState} from 'react';
import GlobalContext from '../Context/GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit} from '@fortawesome/free-solid-svg-icons';


const Schedule =()=>{
const {timeTable, theme, toContribute, profile}=useContext(GlobalContext);
const [mondays]=useState([]);
const [tuesdays]=useState([]);
const [wednesdays]=useState([]);
const [thursdays]=useState([]);
const [fridays]=useState([]);
const [saturdays]=useState([]);



    return (
<div className="container">


    <h3>Lecture Time-Table </h3>
    <h5>
        Department of {profile.department} {profile.level}Level
    </h5>
    <h6>
        {profile.institution}
    </h6>

    <div className="table-responsive" >
    <table className={`table table-${theme} table-striped table-hover table-condensed `}>

        <thead>
<th>
    Course
</th>
<th>
    Time-In
</th>

<th>
    Time-Out
</th>
<th>
    Venue
</th>



        </thead>
<tbody>
{mondays.length>0?<h5>Monday</h5>:<h></h>}
 {timeTable.map((period, key)=>{
     if(period.day==="Monday") {
       mondays.push(period.course);
    
        return <tr key={key}>
        <td>
            {period.course}
        </td>
        <td>
            {period.time_in}
        </td>
        <td>
            {period.time_out}
        </td>
        <td>
            {period.venue}
        </td>
      
             </tr>
     }
     else  {
return null;
     }
 })}   
</tbody>


<tbody>
{tuesdays.length>0?<h5>Tuesday</h5>:<h></h>}
 {timeTable.map((period, key)=>{
     if(period.day==="Tuesday") {
       tuesdays.push(period.course);
    
        return <tr key={key}>
        <td>
            {period.course}
        </td>
        <td>
            {period.time_in}
        </td>
        <td>
            {period.time_out}
        </td>
        <td>
            {period.venue}
        </td>
       
             </tr>
     }
     else {
        return null;
     }
 })}   
</tbody>


<tbody>
{wednesdays.length>0?<h5>Wednesday</h5>:<h></h>}
 {timeTable.map((period, key)=>{
     if(period.day==="Wednesday") {
        wednesdays.push(period.course);
    
        return <tr key={key}>
        <td>
            {period.course}
        </td>
        <td>
            {period.time_in}
        </td>
        <td>
            {period.time_out}
        </td>
        <td>
            {period.venue}
        </td>
       
             </tr>
     }
     else  {
        return null;
     }
 })}   
</tbody>


<tbody>
{thursdays.length>0?<h5>Thursday</h5>:<h></h>}
 {timeTable.map((period, key)=>{
     if(period.day==="Thursday") {
       thursdays.push(period.course);
    
        return <tr key={key}>
        <td>
            {period.course}
        </td>
        <td>
            {period.time_in}
        </td>
        <td>
            {period.time_out}
        </td>
        <td>
            {period.venue}
        </td>
      
             </tr>
     }
     else  {
        return null;
     }
 })}   
</tbody>



<tbody>
{fridays.length>0?<h5>Friday</h5>:<h></h>}
 {timeTable.map((period, key)=>{
     if(period.day==="Friday") {
        fridays.push(period.course);
    
        return <tr key={key}>
        <td>
            {period.course}
        </td>
        <td>
            {period.time_in}
        </td>
        <td>
            {period.time_out}
        </td>
        <td>
            {period.venue}
        </td>
     
             </tr>
     }
     else  {
        return null;
     }
 })}   
</tbody>



<tbody>
{saturdays.length>0?<h5>Saturday</h5>:<h></h>}
 {timeTable.map((period, key)=>{
     if(period.day==="Saturday") {
       saturdays.push(period.course);
    
        return <tr key={key}>
        <td>
            {period.course}
        </td>
        <td>
            {period.time_in}
        </td>
        <td>
            {period.time_out}
        </td>
        <td>
            {period.venue}
        </td>
     
             </tr>
     }
     else  {
        return null;
     }
 })}   
</tbody>



    </table>
</div>
<button style={{position:"fixed", bottom:"6%", right:"2%", zIndex:"200"}} className="microskool-button" onClick={toContribute}>
    <FontAwesomeIcon icon={faEdit} />  Contribute
</button>
</div>
    )
}

export default Schedule;