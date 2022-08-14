import React, {useContext} from 'react';
import { message } from 'antd';
import axios from 'axios';
import GlobalContext from '../Context/GlobalContext';


  

const ProfilePixUpload = () => {
    const {theme, closePop, RefreshData}=useContext(GlobalContext);


    const uploadPassport=(e)=>{
        message.loading('Uploading');
        const url ="https://microskool.com/api/server/upload.php";
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('email', sessionStorage.getItem("session"));
    
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
    <div style={{maxWidth:"300px"}}>

<input className={`form-control ${theme}`}  onChange={uploadPassport} title='Select Passport' id='title' type="file" placeholder='Enter Course Title'/>

    </div>
  )
}

export default ProfilePixUpload;