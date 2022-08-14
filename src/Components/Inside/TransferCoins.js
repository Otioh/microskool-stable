import React, {useEffect, useState, useContext} from 'react';
import { message } from 'antd';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import GlobalContext from '../Context/GlobalContext';





function TransferCoins({user}) {
  const {closePop,RefreshData, theme}=useContext(GlobalContext);


const [image, setimage] = useState(user.image);
const [name, setname] = useState(user.fullname);
  const [campus, setcampus] = useState(user.campus);
const [myamount, setmyamount] = useState(0);

const [email, setemail] = useState(sessionStorage.getItem("session"));
const [code, setcode] = useState(user.code);


  return (
    <div className='container'>
         <div className="user-image">
<img src={image} alt="User" />
</div>
    <div className='row'>
    <div className='col-sm-6'>
    <input type="text" placeholder="Receiver Name" className={`form-control ${theme}`} value={name} />
    <br/>
    <input type="text" placeholder="Campus" className={`form-control ${theme}`} value={campus} />
    <br/>
    </div>
    <div className='col-sm-6'>
    <input  type="number" placeholder="Amount" className={`form-control ${theme}`} onChange={(e)=>{
     setmyamount(e.target.value);
    }} />
    <br/>
    <button className='btn btn-success' onClick={()=>{
      closePop();
            axios.get("https://microskool.com/api/server/sendcoins.php?code="+code+"&&amount="+myamount+"&&email="+email).then((res)=>{
        if(res.data==="fail"){
          message.error("Transfer Failed!");
        }else{
          RefreshData();
          message.info(res.data);
        }
      })
    }}>
        <FontAwesomeIcon icon={faCheck} /> Send
    </button>
    </div>
    </div>
        </div>
    
  )
}

export default TransferCoins;