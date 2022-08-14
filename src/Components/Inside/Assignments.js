import React, { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';
import { message } from 'antd';
import axios from 'axios';
import AssignmentDetails from './AssignmentDetails';

function Assignments() {
    const { theme, MyAssignments, RefreshData, setloader, setHistory, history, setcontent, setDropDown } = useContext(GlobalContext);
console.log(MyAssignments);
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-sm-8'>
    <h2>Assignments</h2>
                  <ul className={`list-group bg-secondary ${theme}`}>
                      {
                          MyAssignments.map((assignment, key) => {
                              return <li key={key} className={`list-group-item d-flex justify-content-between align-items-center ${theme}`} onClick={()=>{
                                setloader(true);
                                  history.push("toAssignmentDetails");
                                  setDropDown(false)
                                  setcontent(<AssignmentDetails lecturer={assignment.lecturer} id={assignment.id} image={assignment.image} course={assignment.course} dateposted={assignment.dateposted} deadline={assignment.deadline} questions={assignment.questions} status={assignment.status} />)
                                 
        setHistory(history);
       
      
                              }}>
                               
                                  <p className={`list-group-item-text microskool-text`}>{assignment.course}</p>
                                  <p className={`list-group-item-text `}>{assignment.questions} <i className='microskool-text-gold'>
                                          {assignment.lecturer}
                                  </i>
                                  </p>
                                  <p className={`list-group-item-text microskool-text`}>{assignment.deadline}</p>
                              
                              </li>
                          })
                      }
                  </ul>
    </div>

    <div className='col-sm-4'>

    </div>

    </div>

    </div>
  )
}

export default Assignments;