import React, {useEffect, useState, useContext} from 'react';
import { message } from 'antd';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered} from '@fortawesome/free-solid-svg-icons';
import TransferCoins from './TransferCoins';
import GlobalContext from '../Context/GlobalContext';


  
function TransRoll() {
    const {theme,setpopTitle,setPopMessage, setPop, setloader,closeRoll}=useContext(GlobalContext);
    const [transEmail, setTransEmail] = useState("admin@microskool.com");
  return (
    <div>
    <br/>
    <input className={`form-control ${theme}`} type="text" placeholder='Reg Number of Receiver' onChange={(e)=>{
     setTransEmail(e.target.value);
    }} />

 <button onClick={()=>{
setloader(true);
        axios.get(`https://microskool.com/api/server/user.php?code=${transEmail}`).then((res)=>{
    if(res.data==="fail"){
        message.error("No User with this Reg No")
        setloader(false);

    }else{
      
        setpopTitle("Transfer Coins");
        setPopMessage(<TransferCoins user={res.data} /> )
 setPop();
 setloader(false);
closeRoll();
    }
  
   })

 }} > 
<FontAwesomeIcon icon={faRegistered} /> Process
 </button>
 </div>

  )
}

export default TransRoll