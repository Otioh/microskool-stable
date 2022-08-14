import {createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Search from '../Inside/Search';
import Loader from '../Inside/Loader';
import Settings from '../Inside/Settings';
import Home from '../Inside/Home';
import Profile from '../Inside/Profile';
import Reference from '../Inside/Reference';
import Calculator from '../Inside/Calculator';
import EditProfile from '../Inside/EditProfile';
import AddMyCourse from '../Inside/AddCourse';
import ProfilePixUpload from '../Inside/ProfilePixUpload';
import GSS from '../Inside/GSS';
import AddPeriod from '../Inside/AddPeriod';
import ChangePassword from '../Inside/ChangePassword';

import CBT from '../Inside/CBT';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDoorOpen, faArrowCircleLeft, faArrowCircleRight, faCheck, faCoins,faUserGear,faBell,
     faBookOpenReader, faGear, faUser, faComputer, faList,faGamepad,faCopy,faPowerOff,
    faSearch, faVideo, faPager, faClock, faBook, faCalculator, faMoneyBill1,faShareAlt,
    faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import CBTList from '../Inside/CBTList';
import TransferCoins from '../Inside/TransferCoins';
import { message } from 'antd';
import TransRoll from '../Inside/TransRoll';
import TransNotification from '../Inside/TransNotification';
import Schedule from '../Inside/Schedule';
import ScheduleContribute from '../Inside/ScheduleContribute';
import { functionSequence } from '../Flame';
import UserProfile from '../Inside/UserProfile';
import MyCourseOutline from '../Inside/MyCourses';
import Assignments from '../Inside/Assignments';
import PastQuestions from '../Inside/PastQuestions';
import ActivateAccount from '../Inside/ActivateAccount';



const GlobalContext = createContext({});

export const ContextProvider=({children})=>{
let navigate=useNavigate();
const [timeTable, setTimeTable]=useState([]);
const [MyAssignments, setMyAssignments] = useState([]);
const [loader, setloader] = useState(false);
    const [rollMessage, setRollMessage] = useState(<>JSX</>);
    const [rollHeight, setRollHeight] = useState("0px");
    const [rollHeader, setRollHeader] = useState("");
    const [fall, setfall] = useState(true);
   const [trans_notification, setNotification]=useState([]);
   const [MyCourses, setMyCourses] = useState([]);
   const [rollDisp, setRollDisp] = useState(false);
    const [topPosition, settopPosition] = useState(0);
    const [campuses, setcampuses] = useState([]);
    const [popup, setpopup] = useState(false);
    const [popTitle, setpopTitle] = useState("Title");
    const [popMessage, setPopMessage] = useState(<div>yes</div>);
const [qno, setQno] = useState(1);
    const [dropDown, setDropDown] = useState(false);
    const [myVotes, setmyVotes] = useState([]);
    const [searchTeerm, setsearchTeerm] = useState("");
  useEffect(()=>{
    if(dropDown===true){
      setfall(false);
    }
    else if(fall===true){
      setDropDown(false);
    }
  }, [dropDown, fall])
  const changePassword=()=>{
    setpopTitle("Change Password");
    setPopMessage(<ChangePassword/> )
    setPop();
  }

const closePop=()=>{
    setpopup(false);
    setDropDown(false);
    setpopTitle("");
    setPopMessage(<></>);
}
const setPop=()=>{
    setpopup(true);
    
}
const uploadPix=()=>{
  setpopTitle("Upload Profile");
  setPopMessage(<ProfilePixUpload/> )
  setPop();
}
const sendCoins=(receiver, amount)=>{
message.loading("Please Wait")
  axios.get("https://microskool.com/server/sendcoins.php?code="+receiver+"&&amount="+amount).then((res)=>{
  message.success(res.data);
})
}
const [ExamQuestions]=useState([])
    const setRoll =(header, message, height)=>{
setRollMessage(message);
setRollHeader(header);
setRollHeight(height);
setRollDisp(!rollDisp);
    }
    const closeRoll =()=>{
        setRollMessage("");
        setRollHeader("");
        setRollHeight("0px");
        setRollDisp(false);
            }
const Logout=(miliSecs)=>{
  setIsLoggin(false);
setTimeout(() => {
    navigate("/signin");
    closeRoll();
}, miliSecs);

}   
const [content, setcontent] = useState(<Loader/>);
const [history, setHistory]=useState([]);
const [courses, setCourses]=useState([]);
const newPeriod=()=>{
  setpopTitle("Add New Period");
  setPopMessage(<AddPeriod/> );
  setPop();
}
const newPop=()=>{
    setpopTitle("Select Course");
    setPopMessage(<CBTList toCBT={toCBT} closePop={closePop} />)
    setPop();
 }

const toSearch=()=>{
  setloader(true);
    history.push("toSearch");
    setHistory(history);
        setcontent(<Search/>)
        setDropDown(false)
    }
   

    
    const toHome=()=>{
      setloader(true);
        history.push("toHome");
        setHistory(history);
        setcontent(<Home/>)
        setDropDown(false)
    }
    const toContribute=()=>{
   
      history.push("toSchedule");
      setHistory(history);
          setcontent(<ScheduleContribute/> )
          setDropDown(false)
         
  }
  const toUserProfile=(user)=>{
   
    history.push("toSchedule");
    setHistory(history);
        setcontent(<UserProfile user={user} /> )
        setDropDown(false)
       
}
  const toOutline = () => {

    history.push("toProfile");
    setHistory(history);
    setcontent(<MyCourseOutline/> )
    setDropDown(false)

  }
    const toGSS=()=>{
      setloader(true);
        history.push("toGSS");
        setHistory(history);
        setDropDown(false);
        setcontent(<GSS/>)
        setDropDown(false)
    }
    const toCBT=()=>{
      setloader(true);
        history.push("toCBT");
        setHistory(history);
        setDropDown(false);
        setcontent(<CBT/>)
        
    }
    
    const toAssignment=()=>{
      setloader(true);
        history.push("toAssignment");
        setHistory(history);
        setcontent(<Assignments/> )
        setDropDown(false)
    }
    
    const toSchedule=()=>{
      setloader(true);
        history.push("toSchedule");
        setHistory(history);
        setcontent(<Schedule/> )
        setDropDown(false)
    }
  
     const toActivate=()=>{
      setloader(true);
       history.push("toActivate");
        setHistory(history);
        setcontent(<ActivateAccount/> )
        setDropDown(false)
    }
  const toMyCourses = () => {
    setloader(true);
    history.push("toMyCourses");
    setHistory(history);
    setcontent(<MyCourses/>)
    setDropDown(false)
  }
    
    const toPastQ=()=>{
      setloader(true);
        history.push("toPastQ");
        setHistory(history);
        setcontent(<PastQuestions/> )
        setDropDown(false)
    }
    const toCalculator=()=>{
      setloader(true);
      setHistory(history);
        history.push("toCalculator");
        setcontent(<Calculator/>)
        setDropDown(false)
    }
    const toReference=()=>{
      setloader(true);
        history.push("toReference");
        setHistory(history);
        setcontent(<Reference/>)
        setDropDown(false)
    }
    const toProfile=()=>{
      setloader(true);
        history.push("toProfile");
        setHistory(history);
        setcontent(<Profile/>)
        setDropDown(false)
    }
    const toSettings=()=>{
      setloader(true);
        history.push("toSettings");
        setHistory(history);
        setcontent(<Settings/>)
        setDropDown(false)
    }
   
    const toProfileToEarnings=()=>{
      setloader(true);
        history.push("toProfile");
        setHistory(history);
        setcontent(<Profile/>)
        newRoll()
        setDropDown(false)
   
    }

    const newItems=[{name:"Lectures", icon:faVideo, action:toGSS},
    {name:"CBT Practice", icon:faComputer, action:newPop},
    {name:"Syllabus", icon:faList, action:toCBT},
    {name:"Online Contest", icon:faGamepad, action:toCBT}
   ];
      
   const newRoll=()=>{
    setRoll("Your Earnings", 

    <div >
      <h style={{fontSize:"20pt", color:"gold"}}> <FontAwesomeIcon icon={faCoins} /></h><h style={{fontSize:"20pt"}}> {parseFloat(profile.coins).toFixed(2)} </h><br/>
      Engage in more activities to increase your earnings,  or refer a friend for more significant Earnings
      <ul>
        <li>

            <i ><h style={{color:"gold"}}>
            <FontAwesomeIcon icon={faCoins} /></h> 500
          </i> <em> - Referral Bonus 
          </em>
       
        </li>

        <li>
   <i ><h style={{color:"gold"}}>
            <FontAwesomeIcon icon={faCoins} /></h> 50
          </i>
<em> -  Post valid Assignments
  </em>       
        </li>

  <li>
   <i ><h style={{color:"gold"}}>
            <FontAwesomeIcon icon={faCoins} /></h> 30
          </i>
<em> -  Post accurate Time-Table Period
  </em>       
        </li>

        <li>
  <i >
  <h style={{color:"gold"}}>
            <FontAwesomeIcon icon={faCoins} /></h> 100
          </i>
<em> - Upload Valid Past Questions 
  </em>       
        </li>
      </ul>
      <button onClick={transfer}>
        <FontAwesomeIcon icon={faMoneyBill1} /> Transfer Coins
      </button>
      <button onClick={referRoll}>
        <FontAwesomeIcon icon={faShareAlt} />
      </button>
      </div>, "150px")}

    const referRoll=()=>{
      setRoll("Refer & Earn", <div>Refer a friend to Microskool and earn NGN500 when they activate their account, copy the Referral Link below <br/>
      <input className='form-control' type="code" placeholder='Referral Link' value="http/hsjdjsdsjsdjsdsjsd" />
      <button> 
<FontAwesomeIcon icon={faCopy} />
      </button>
      </div>, "150px")}
const transfer=()=>{

  setRoll("Transfer Coins", <TransRoll/> , "150px")}


      const notify=()=>{
      setRoll("Earnings Notifications", <TransNotification/> , "150px")}


    const logMeOut=()=>{
      Logout(1000)}

      const gotoSettings=()=>{
        setRoll("Go To Settings", <div>Proceed to Security Section of Settings to change Security Preference
          <button onClick={toSettings}>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>, "150px")}

  const AddCourse = () => {
    message.loading("Loading")
    setRoll("Add Your Semester Course ", <AddMyCourse/> , "150px")
  }

  const ActivateToCreateCourse = () => {
    
    setRoll("Create New Course & Earn ", <div>Validate your account to check eligibility to create course <button onClick={()=>{
      toActivate();
    }}>Validate</button> </div> , "150px")
  }


    const logout=()=>{
      setRoll("Confirm", <div>Sure you want to logout?<br/><button className='btn-microskool' onClick={logMeOut}>Yes</button></div>, "150px")}
      const [isLoggin, setIsLoggin] = useState(false);
let sUpCount=0;

useEffect(()=>{
  axios.get('http://192.168.43.31/microskool2.1/api/server/campuses.php').then(
    newres=>{
      setcampuses(newres.data);
})
}, [isLoggin])



useEffect(() => {
  if(sessionStorage.getItem("session")!==""){
    axios.get('http://192.168.43.31/microskool2.1/api/server/allcourse.php').then(
  newres=>{

    setCourses(newres.data);
    
  
  })  
  


  

  setIsLoggin(true);
    axios.get('http://192.168.43.31/microskool2.1/server/courses.php?email=' + sessionStorage.getItem("session")).then(
      newres => {
        setMyCourses(newres.data)
      
      })


    axios.get('http://192.168.43.31/microskool2.1/api/server/profile.php?email='+sessionStorage.getItem("session")).then(
    res=>{

setprofile(res.data);
runMyVotes();
settheme(res.data.theme);

        axios.get('http://192.168.43.31/microskool2.1/api/server/notify.php?email='+sessionStorage.getItem("session")).then(
  newres=>{

    setNotification(newres.data);
    
      
  })
  
        axios.get('http://192.168.43.31/microskool2.1/app/assign.php?email=' + sessionStorage.getItem("session")).then(
        newres => {

          setMyAssignments(newres.data);


        })
   
    })
    
  }else{
    setIsLoggin(false); 
    navigate("/signin");
  }

}, [popup,navigate, rollDisp, fall, history])

const RefreshData =()=>{
  axios.get('http://192.168.43.31/microskool2.1/api/server/courses.php?email=' + sessionStorage.getItem("session")).then(
    newres => {
      setMyCourses(newres.data)
    })


  axios.get('http://192.168.43.31/microskool2.1/api/server/profile.php?email='+sessionStorage.getItem("session")).then(
      res=>{
setprofile(res.data);
setHistory(history);
      });
  axios.get('http://192.168.43.31/microskool2.1/api/server/notify.php?email='+sessionStorage.getItem("session")).then(
        newres=>{
      
          setNotification(newres.data);
            
        })  
      
}

const runTimeTable=()=>{
  let result;
  axios.get(`http://192.168.43.31/microskool2.1/api/server/schedule.php?department=${profile.department}&&level=${profile.level}`).then(
    newres=>{
  
      result=newres.data;
 
     

      setTimeout(() => {
        for(let i=0;i<myVotes.length;i++){
      for(let j=0;j<result.length;j++){
        if(parseInt(myVotes[i].id)===result[j].id){
          result[j].voted="true";
          result[j].votetype=myVotes[i].type;
        
         
        }
      }
      
        }
 
        setTimeTable(result)  
     
  
      }, 1000);
     
    
    })  

}

const runMyVotes=()=>{
  axios.get(`http://192.168.43.31/microskool2.1/api/server/periodvotes.php?email=${sessionStorage.getItem("session") }`).then(
    newres=>{
  
      setmyVotes(newres.data);

  
    
    })  

}

const [profile, setprofile] = useState({});
 const [theme, settheme] = useState(profile.theme===undefined || profile.theme==="" || profile.theme==="default"?"light":profile.theme);


    setTimeout(() => {
    runTimeTable();
    runMyVotes();

  }, 2000);
  const editProfile=()=>{
    setpopTitle("Edit Profile");
    setPopMessage(<EditProfile/> )
    setPop();
  }

  const [searchArrayList, setSerchArr]=useState(()=>{
    let result=[{icon:faClock, description:"Added GSS", action:toSchedule, tag:"today"}];
    axios.get(`http://192.168.43.31/microskool2.1/api/server/schedule.php?department=${profile.department}&&level=${profile.level}`).then(
    newres=>{
    
 for(let i=0;i<newres.data.length;i++){
  result.push({icon:faCoins, description:"Added "+newres.data.course, action:toSchedule, tag:"today"})
 }
  
 return result;      
      })  
  
return  [{icon:faClock, description:"Nothing Added GSS "+result.length, action:toSchedule, tag:"today"}];

  })
      
    return (
<GlobalContext.Provider value={{Logout, theme, settheme, rollDisp, setRollDisp, setPop,popMessage,popTitle,setpopTitle,
    rollMessage, setRollMessage, rollHeader, setRollHeader, rollHeight, courses,fall,toCBT,popup,setPopMessage,
    content,setcontent,history,toSearch,toHome,toGSS,toAssignment,toSchedule,toPastQ,setfall,closePop,
    toCalculator,toReference,toProfile,toSettings,setDropDown, dropDown,topPosition, settopPosition,
    setRollHeight, newItems, setRoll, closeRoll, qno,ExamQuestions, setQno,searchArrayList,loader,setloader,
    newRoll,  logout, sendCoins, isLoggin, setIsLoggin,profile, setprofile, setCourses,RefreshData,
     gotoSettings, logMeOut,notify,transfer,referRoll,toProfileToEarnings, trans_notification, setNotification,
     timeTable, setTimeTable, runTimeTable, toContribute, myVotes, toUserProfile, newPeriod, changePassword,
        uploadPix, setSerchArr, editProfile, campuses, setcampuses, MyCourses, setMyCourses, toOutline, AddCourse, MyAssignments,
        ActivateToCreateCourse, toActivate, toMyCourses
        

    }}>
    {children}
</GlobalContext.Provider>

    )
}

export default GlobalContext;