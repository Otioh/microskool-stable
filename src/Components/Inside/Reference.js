import React, {useContext, useState} from 'react';
import GlobalContext from '../Context/GlobalContext';

function Reference() {
    const {theme, courses,profile}=useContext(GlobalContext);
    const [searchTeerm, setsearchTeerm] = useState("");
    const changeSearch=(e)=>{
        setsearchTeerm(e.target.value);
    }
  return (
    <>
    <div className='container'>
    <br></br><br></br>
    <div className="row">
   
        <div className="col-sm-6">
<h4>
    Course Reference
</h4>
<h6>{profile.institution}</h6>
<div>
    <input type="search" className={`form-control ${theme}`} onChange={changeSearch} placeholder="Search Course" />
    <div className="table-responsive" >
    <table className={`table table-${theme} table-striped table-hover table-condensed `}>
<tbody>
        {courses.filter((course) => { if(searchTeerm==="" || searchTeerm.length<3){
            return null;
        }else if(course.title.toLowerCase().includes(searchTeerm.toLowerCase()) || course.code.toLowerCase().includes(searchTeerm.toLowerCase()) || course.department.toLowerCase().includes(searchTeerm.toLowerCase())){
return course;
        }
        else{
            return null;
        }
    }).map((course, key)=>{
        
       return <tr key={key}>
        <td>
        {course.code}
        </td>
        <td>
        {course.title}
        </td>
        <td>
        {course.department} Department
        </td>
        <td>
        {course.level} Level
        </td>
       
      </tr>
    })}
        
</tbody>
</table>
</div>
</div>
</div>
<div className="col-sm-3">
</div>
<div className="col-sm-3">
</div>
</div>
</div>

    </>
  )
}

export default Reference;