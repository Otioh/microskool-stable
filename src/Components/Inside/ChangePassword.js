import React, { useContext} from 'react';
import GlobalContext from '../Context/GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSave, faCheck} from '@fortawesome/free-solid-svg-icons';


function ChangePassword() {
  const {theme}=useContext(GlobalContext);
  return (
    <div className="container">
        <div className='row'> 
        <div className='col-sm-6'>
<div className="form-group">
<input placeholder='Enter New Password' type="password" className={`form-control ${theme}`} />
</div>
</div>
<div className='col-sm-6'>
<div className="form-group">
<input placeholder='Confirm New Password' className={`form-control ${theme}`} />
</div>
</div>
<div className='col-sm-6'>

<div className="form-group">
<input placeholder='Enter Old Password' type="password" className={`form-control ${theme}`} />
</div>
</div>
<div className='col-sm-6'>
<div className="form-group">
<button className="btn btn-primary "><FontAwesomeIcon icon={faCheck} /> </button>
</div>
</div>
</div>
    </div>
  )
}

export default ChangePassword;