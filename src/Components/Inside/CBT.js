import React, {useContext, useState} from 'react';
import GlobalContext from '../Context/GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight,faPowerOff, faCheck, faTable} from '@fortawesome/free-solid-svg-icons';
import QuestionGrid from './QuestionGrid';
import { message } from 'antd';
import { useTimer } from '../FlemHooks';

function CBT() {
  const {theme, setPop,setpopTitle,setPopMessage, qno, ExamQuestions, setQno}=useContext(GlobalContext);
const [option_b, setoption_b] = useState("Person");
const [option_a, setoption_a] = useState("Place");
const [option_c, setoption_c] = useState("Thing");
const [option_d, setoption_d] = useState("All of the Above");
const [option_correct, setoption_correct] = useState("");
const [selected_a, setselected_a] = useState(true)
const [selected_b, setselected_b] = useState(true)
const [selected_c, setselected_c] = useState(true)
const [selected_d, setselected_d] = useState(true)

const [selected_option, setselected_option] = useState("");
const next=()=>{
  setQno(qno+1);
  if(selected_option===""){

  }else{
    ExamQuestions.push({id:qno, question:"", option:selected_option})
    setselected_option("")
  }
}

  return (
    <div className="container">
      <div className="row">
<div className="col-sm-8">
  <div className={`exam-title ${theme}`}>
  Use of English & Library Skill
  </div>

</div>

<div className="col-sm-4">
<div className="exam-info"> <span className="question-no">{qno}/50</span> <span className="timer">{useTimer(0,3,5)}</span> </div>
</div>
      </div>
<div className='row'>
<div className='col-sm-6'>
<div className="question-panel">

What is a Noun?
</div>
</div>

<div className='col-sm-6'>
<div className={`option-panel ${theme}`}>
<ul className='list-group'>
<li className={`list-group-item ${option_a===selected_option? " active " :""} d-flex justify-content-between align-items-center`} onClick={
                      ()=>{
                       
                      
                        if(selected_a===true){
                          setselected_option(option_a)
                          
                          setselected_a(!selected_a);
                        }else{
                        if(selected_option===option_a){
                          setselected_option("")
                          setselected_a(!selected_a);
                         }else{
                          setselected_option(option_a)
                        
                         }
                        }
                      
                        
                        }
                    }>
                           <p className={`list-group-item-text `}>A. {option_a}</p>
                    </li>

                    <li className={`list-group-item ${option_b===selected_option? " active " :""} d-flex justify-content-between align-items-center`} onClick={
                      ()=>
                      {
                      
                        if(selected_b===true){
                          setselected_option(option_b)
                         
                          setselected_b(!selected_b);
                        }else{
                      
                          if(selected_option===option_b){
                            setselected_option("")
                           setselected_b(!selected_b);
                           }else{
                            setselected_option(option_b)
                         
                           }
                        }
                     
                        }
                    }>
                    <p className={`list-group-item-text `}>B. {option_b}</p>
                    </li>

                    <li className={`list-group-item ${option_c===selected_option? " active " :""} d-flex justify-content-between align-items-center`} onClick={
                      ()=>    {
                        
                        if(selected_c===true){
                          setselected_option(option_c)
                          setselected_c(!selected_c);
                        }else{                         
                          if(selected_option===option_c){
                            setselected_option("")
                            setselected_c(!selected_c);
                           }else{
                            setselected_option(option_c)
                         
                           }
                        }
                      
                        }
                    }>
                     <p className={`list-group-item-text `}>C. {option_c}</p>
                    </li>
                    <li className={`list-group-item ${option_d===selected_option? " active " :""} d-flex justify-content-between align-items-center`} onClick={
                      ()=>    {
                        if(selected_d===true){
                          setselected_option(option_d)
                          setselected_d(!selected_d);
                        }else{
                          if(selected_option===option_d){
                            setselected_option("")  
                            setselected_d(!selected_d);
                           }else{
                            setselected_option(option_d)
                           }
                        }
                        }
                    }>
                        <p className={`list-group-item-text `}>D. {option_d}</p>
                    </li>
                </ul>
</div>
<div className=' down-panel'>
  <div className='row'>  <button className='btn btn-warning'>
    <FontAwesomeIcon icon={faArrowLeft} /> Prev</button><button className='btn btn-primary' onClick={next}>
      Next <FontAwesomeIcon icon={faArrowRight} /> </button></div>
<div className='row'> <button className='btn btn-danger'>Quit <FontAwesomeIcon icon={faPowerOff} /></button> <button className='btn btn-success'>Submit <FontAwesomeIcon icon={faCheck} /></button></div>
<div className='row'>  <button style={{width:"93%"}} className='btn btn-secondary' onClick={()=>{
  setPop();
  setpopTitle("Select Question");
  setPopMessage(<QuestionGrid n={50} />)
}}> Questions Grid <FontAwesomeIcon icon={faTable} /></button></div>
 </div>
</div>
</div>
    </div>
  )
}

export default CBT;