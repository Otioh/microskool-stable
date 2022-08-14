import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../Context/GlobalContext';


function AssignmentDetails({ id, image, course, dateposted, deadline, questions, status, lecturer }) {
    const { theme, toAssignment, RefreshData } = useContext(GlobalContext);
  return (
    <div>
          <br />
          <button onClick={toAssignment} className='btn'>
              <FontAwesomeIcon icon={faBackward} />  Back
          </button><br /><br />
<div className='container'>
<div className='row'>
<div className='col-sm-8'>
<h3>
    {course}
</h3>
<i className='microskool-text-success'>
    {dateposted}
</i> -- 
<i className='microskool-text-danger'>
{deadline}
</i><br/><br/>
                      <div className={`card ${theme}`}>    {questions} <i className='microskool-text-gold'>
                          {lecturer}
                      </i></div><br /><br />
<img  alt={course} style={{width:"100%", height:"auto"}} src={image} />
</div>
<div className='col-sm-4'>

</div>

</div>


</div>


    </div>
  )
}

export default AssignmentDetails