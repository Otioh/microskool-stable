import React, {useContext, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit, faAdd, faTimes } from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../Context/GlobalContext';
import { message } from 'antd';
import axios from 'axios';


function MyCourseOutline() {
  const { theme, RefreshData, MyCourses, toProfile, ActivateToCreateCourse, closeRoll, AddCourse,  profile}=useContext(GlobalContext);

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
User Courses
<div className='row'>

                      <ul className={`list-group bg-secondary ${theme}`}>
                          {
                              MyCourses.map((course, key) => {
                                  return <li key={key} className={`list-group-item d-flex justify-content-between align-items-center ${theme}`}>
                                      <p className={`list-group-item-text `}>{course.code}</p>
                                      <p className={`list-group-item-text `}>{course.title}</p>
<button className="btn btn-outline-danger" onClick={()=>{
                                      axios.get("https://microskool.com/api/server/removecourse.php?id="+course.id).then((response)=>{
    message.info(response.data);
    RefreshData();
  })

}}>
<FontAwesomeIcon icon={faTimes} />
</button>
                                  </li>
                              })
                          }
                      </ul>
        </div>
        </div>
             <div className="col-sm-2">
        User Profile 
          <div className={`card microskool-card ${theme}`}>
                      <div style={{width:"92px", height:"92px"}} className="user-image" onClick={toProfile}>
  <img style={{ width: "80px", height: "80px" }} src={profile.image} alt="User" />
                      </div>
        </div>
    </div></div>
    <div className={`pro-footer ${theme} `}>
        <button className='footer-btn-icon' onClick={AddCourse} title="Add Courses">
<FontAwesomeIcon icon={faEdit} />
</button>
        <button className='footer-btn-icon microskool-text-success' title='Create Course' onClick={ActivateToCreateCourse}>
          <FontAwesomeIcon icon={faAdd} />
        </button>
<button className='footer-btn-icon microskool-text-gold' onClick={toProfile} title="Refer a Friend">
<FontAwesomeIcon icon={faUser} /> 
</button>
    </div>
    </div>
  )
}
export default MyCourseOutline;