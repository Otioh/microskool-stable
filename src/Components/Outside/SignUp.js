import React, {useContext, useEffect, useState} from 'react';
import NavBar from './NavBar';
import Loader from '../Loader';
import GlobalContext from '../Context/GlobalContext';
import axios from 'axios';
import { message } from 'antd';

function SignUp() {
const {loader, setloader}=useContext(GlobalContext);
const [firstName, setfirstName] = useState("");
const [surname, setsurname] = useState("");
const [middleName, setmiddleName] = useState("");
const [regNo, setregNo] = useState("");
const [phone, setphone] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [confirmPassword, setconfirmPassword] = useState("");
const [department, setdepartment] = useState("");
const [faculty, setfaculty] = useState("");
const [level, setlevel] = useState("");
const [accountType, setaccountType] = useState("");

const SubmitForm=()=>{
if(accountType===""||level===""||faculty===""||department===""||confirmPassword===""||password===""||email===""||phone===""||regNo===""
||middleName===""||surname===""||firstName===""
){
message.warn("All Fields are Required");
}else{

  if(password===confirmPassword){  
    axios.get(`http://microskool.com/api/server/signup.php?firstname=${firstName}&&middlename=${middleName}&&surname=${surname}&&department=${department}&&accounttype=${accountType}&&phone=${phone}&&faculty=${faculty}&&password=${password}&&level=${level}&&email=${email}&&reg=${regNo}`).then((response)=>{
message.info(response.data);
})
  }
else{
message.error("Password Mismatch");
}
}
}
useEffect(() => {
 setloader(false);
})


  return (
    <>
       <Loader/>
    <NavBar/>
    <div className='pane micro-margin'>
  <div className='row'>
    <div className='col-sm-4'>
    <div className='card microskool-card bg-white'>
<div className='form'>
    <legend >Sign Up</legend>
    <div className='form-group  micro-margin'>
    <input className='form-control'  type="text" id="firstname" placeholder="First Name" onChange={(e)=>{
      setfirstName(e.target.value);
    }} />
    </div>
    <div className='form-group  micro-margin'>
                  <input className='form-control' type="text" id="middlename" placeholder="Middle Name" onChange={(e) => {
                    setmiddleName(e.target.value);
                  }} />
    </div>
    <div className='form-group  micro-margin'>
                  <input className='form-control' type="text" id="surname" placeholder="Surname" onChange={(e) => {
                    setsurname(e.target.value);
                  }} />
    </div>
    <div className='form-group  micro-margin'>
    <input className='form-control' type="text" id="matric" placeholder="JAMB/Matric No" onChange={(e)=>{
      setregNo(e.target.value);
    }}  />
    </div>
    



  </div>
  </div>
    </div>
<div className="col-sm-4">
<div className="card microskool-card bg-white">

<div className='form-group  micro-margin'>
                <input className='form-control' type="number" id="phone" placeholder="Phone No" onChange={(e) => {
                  setphone(e.target.value);
                }} />
    </div>

<div className='form-group  micro-margin'>
                <input className='form-control' type="email" id="email" placeholder="E-Mail" onChange={(e) => {
                  setemail(e.target.value);
                }} />
    </div>

<div className='form-group  micro-margin'>
                <input className='form-control' type="password" id="password" placeholder="Choose Password" onChange={(e) => {
                  setpassword(e.target.value);
                }} />
    </div>
    <div className='form-group  micro-margin'>
                <input className='form-control' type="password" id="password" placeholder="Confirm Password" onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }} />
    </div>






</div>

</div>

<div className="col-sm-4">
<div className='card microskool-card bg-white'>
<div className='form-group  micro-margin'>
                <select className='form-control' id="department" onChange={(e) => {
                  setdepartment(e.target.value);
                }}  >



    <option>
Department..
    </option>
                  <option id="departments" value="Computer Science">
      Computer Science
                  </option>
      </select>
</div>

<div className='form-group  micro-margin'>
                <select className='form-control' onChange={(e) => {
                  setfaculty(e.target.value);
                }} >
        <option>
    Faculty..
        </option>
        <option id="faculties" value="Physical Science">
          Physical Science
              </option>
          </select>
</div>
<div className='form-group  micro-margin'>
                <select id="level" className='form-control' onChange={(e) => {
                  setlevel(e.target.value);
                }} >
            <option>
        Level..
            </option>
            <option value="100">
             100
                  </option>

                  <option value="200">
                    200
                  </option>

                  <option value="300">
                    300
                  </option>

                  <option value="400">
                    400
                  </option>

                  <option value="500">
                    500
                  </option>

                  <option value="600">
                    600
                  </option>
              </select>
</div>
<div className='form-group  micro-margin'>
                <select id="type" className='form-control' onChange={(e) => {
                  setaccountType(e.target.value);
                }} >
                <option>
            Account Type..
                </option>
                <option value="Student">
                  Student
                      </option>
                      <option value="Aspirant">
                        Aspirant
                            </option>
                  </select>
</div>

<button className="microskool-button" onClick={()=>{
   setloader(true);
                SubmitForm();

}}>
  Sign Up
</button>

  </div>  
</div></div></div>

    
    </>
  )
}

export default SignUp;