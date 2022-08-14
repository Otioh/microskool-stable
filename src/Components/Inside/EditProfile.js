import React, {useContext, useState} from 'react';
import { message } from 'antd';
import axios from 'axios';
import GlobalContext from '../Context/GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave} from '@fortawesome/free-solid-svg-icons';



function EditProfile() {
    const {theme, closePop, RefreshData, profile}=useContext(GlobalContext);
const [department, setdepartment] = useState(profile.department);
const [faculty, setfaculty] = useState(profile.faculty);
const [level, setlevel] = useState(profile.level);
const [phone, setphone] = useState(profile.phone);

    const update=(e)=>{
        message.loading('Uploading');
        const url ="https://microskool.com/api/server/upload.php";
    const formData = new FormData();
    formData.append('department', department);
    formData.append('faculty', faculty);
    formData.append('level', level);
    formData.append('phone', phone);
    
    axios.post(url, formData).then((response)=>{
        let result =response.data;
    
    setTimeout(() => {
        message.destroy();
    if(result.includes('fail')){
    message.error('Invalid File, try again');
    }else{
        RefreshData();
        message.success('Uploaded Successfully');
    }
    }, 2000);
    });

    closePop();
  
    }


  return (
    <div className='container'>
<div className='row'>
<div className='col-sm-6'>
<select className={`form-control ${theme}`} >
<option value={profile.department}>{profile.department}
</option>
</select>
<br/>
<select className={`form-control ${theme}`} >
<option value={profile.faculty}>{profile.faculty}
</option>
</select>
<br/>

</div>
<div className='col-sm-6'>
<select className={`form-control ${theme}`} >
<option value={profile.level}>{profile.level}
</option>
</select>
<br/>
<input type="text" placeholder="Phone Number" className={`form-control ${theme}`} value={profile.phone} />

</div>
</div>
    </div>
  )
}


export default EditProfile;