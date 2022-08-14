import { message } from 'antd';

import React, {useState, useContext} from 'react';
import GlobalContext from '../Context/GlobalContext';

function 
FourPoint({theme}) {
  const {profile, courses}=useContext(GlobalContext);
  const [courseList, setcourseList] = useState([]);
  const [course, setcourse] = useState("");
  const [credit, setcredit] = useState(0);
  const [grade, setgrade] = useState("");
const[GPA, setGPA]=useState(parseFloat(profile.gpa).toFixed(2));
const addCourse=()=>{
if(course===""){
message.warn("Add New Course");
}else{

  let newObj={code:course, credit:credit, grade:grade.substring(0,1), gp:parseInt(grade.substring(2))*parseInt(credit)};
  courseList.push(newObj);
  setcourse("");
  message.success("Addes Successfully");
}

}

const Calculate=()=>{
  if(courseList.length<1){
    return   message.warn("Empty Course Array");
  }else{
  let units=0;
  let gp=0;
for(let i =0;i<courseList.length;i++){
  units+=parseInt(courseList[i].credit);
  gp+=parseInt(courseList[i].gp);

}
  setGPA((gp)/units);
message.success("Calculated Successfully");
  }
 
}

  return (
    <>
    <div className='calculator'>
    4 Point
      <div className='screen'><center>
Your CGPA currently
<h2>
{GPA}
</h2>
</center>
<i>Use control panel below</i>

      </div>
      <div className='add-course' >
<input list='browser' placeholder='Course Code' value={course} onChange={(e)=>{
  setcourse(e.target.value);
}} />
<datalist id="browser">
  {courses.map((course, key)=>{
    return  <option>{course.code}</option>
  })}
 
</datalist>
<select value={credit} onChange={(e)=>{
  setcredit(e.target.value);
}}>
<option>Credit Unit</option>
<option value="4">4</option>
<option value="3">3</option>
<option value="2">2</option>
<option value="1">1</option>
</select>
<select value={grade} onChange={(e)=>{
  setgrade(e.target.value);
}}>
<option>Grade</option>
<option value="A.4">A</option>
<option value="B.3">B</option>
<option value="C.2">C</option>
<option value="D.1">D</option>
<option value="F.0">F</option>
</select>
<button onClick={addCourse}>Add</button>
      </div>
<div className='courses'>
<div className="table-responsive" >
    <table className={`table table-${theme} table-striped table-hover table-condensed `}>
<tbody>

{courseList.map(({code, credit, gp, grade}, key)=>{
  return   <tr key={key}>
  <td>
    {code}
  </td>
  <td>{credit}
  </td>
  <td>
{grade} 
  </td>
  <td>
{gp} GP
  </td>
</tr>

})}
</tbody>

</table>
</div>
</div>
<div className="btn-bar">
<button className={theme} onClick={Calculate}>
Calculate
</button>
<button className={theme} onClick={()=>{
    setcourseList([])}
  }>
Reset
</button>
<button className={theme} onClick={Calculate}>
Save
</button>
</div>
    </div>


    </>
  )
}

export default FourPoint;