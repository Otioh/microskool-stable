import React, {useContext} from 'react';
import GlobalContext from '../Context/GlobalContext';

function QuestionGrid({n}) {
  const {qno, setQno, closePop, ExamQuestions}=useContext(GlobalContext);

    const btnArr=[];
    for(let i=1;i<=n;i++){
btnArr.push(i);
    
}
  return (
    <div className="question-grid">
        {btnArr.map((btn, key)=><button className={` ${btn>ExamQuestions.length ? "bg-microskool":""}`} key={key} onClick={()=>{setQno(btn);closePop()}}>{btn}</button>)}
    </div>
  )
}

export default QuestionGrid