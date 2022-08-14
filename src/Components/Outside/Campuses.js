import React, { useContext, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';
import GlobalContext from '../Context/GlobalContext';
import axios from 'axios';
import Loader from '../Loader';
import { message } from 'antd';


function Campuses() {
    const {profile, campuses, setloader, RefreshData}=useContext(GlobalContext);

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
<div className="col-sm-2">


</div>

<div className="col-sm-8">
<div className='card microskool-card bg-white'>
    <h4>Select Campus</h4>
   Can't find yours? <a style={{float:"right"}} href="#/new-suggestion">Suggest Your Institution</a>
<input type="search" className="form-control" placeholder="Search Campus" />
<ul className={`list-group `}>
          
         {
          campuses.map((val, key)=>{
            return <li key={key} className={`list-group-item d-flex justify-content-between align-items-center`} onClick={()=>{
              setloader(true);
              axios.get("https://microskool.com/api/server/updatecampus.php?email="+sessionStorage.getItem("session")+"&&institution="+val.campus+"&&campus="+val.abr+"&&logo="+val.logo).then((response)=>{
if(response.data==="success"){
  RefreshData()
  navigate("/dashboard")
}else{
  message.warning(response.data);
}
              })

            }} >
            <img style={{width:"35px"}} src={val.logo} alt="" />
            <p className={`list-group-item-text `}>{val.campus}</p>
            <p className={`list-group-item-text `}>[{val.abr}]</p>            
           
          </li>
          })
         }         
                    </ul>
</div>
</div>

<div className="col-sm-2">


</div>


  </div>
</div>




    </>
  )
}

export default Campuses