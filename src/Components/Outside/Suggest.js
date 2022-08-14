import React, { useContext, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBackward} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';
import GlobalContext from '../Context/GlobalContext';
import axios from 'axios';
import Loader from '../Loader';
import { message } from 'antd';

function Suggest() {
    const {profile, campuses, setloader}=useContext(GlobalContext);
    const [institute, setinstitute] = useState("");
    const [campus, setcampus] = useState("");
    const [exist, setExist] = useState(false)
    
useEffect(() => {
  if(exist===false){
    message.loading("Loading");
    axios.get().then((response)=>{
    })
  }else{
    message.destroy()
    message.error("Campus Exist");
  }

  return () => {
    setExist(false);
  }
}, [exist])

    let navigate=useNavigate();
    if(profile.campus==="" || profile.campus===null || profile.campus===undefined){   
    }else{
        navigate("/dashboard")
    }
  return (
    <>
     <Loader/>
<div className='pane micro-margin'>
  <div className='row'>
<div className="col-sm-4">
</div>
<div className="col-sm-4">
<div className='card microskool-card bg-white'>
    <h4>Suggest Campus</h4>
   Provide the following details:
<input type="text" className="form-control" placeholder="Institution Name (e.g University of Calabar, Calabar)" onChange={(e)=>{
  setinstitute(e.target.value);
}} />
<input type="text" className="form-control" placeholder="Abbreviation (e.g Unical)" onChange={(e)=>{
  setcampus(e.target.value);
}} />
<label for="logo">Upload Logo</label>
<input type="file" id="logo" className="form-control" />
<button className="btn btn-primary" onClick={()=>{
  message.loading("Processing");
for(let i=0;i<campuses.length;i++){
if(campuses[i].campus===institute || campuses[i].abr===campus){
setExist(true);
}
}
}}>Submit</button>
<a href="#/campus" className="btn btn-outline-primary"><FontAwesomeIcon icon={faBackward} /> Back</a>
</div>
</div>
<div className="col-sm-4">
</div>
  </div>
</div>
    </>
  )
}
export default Suggest;