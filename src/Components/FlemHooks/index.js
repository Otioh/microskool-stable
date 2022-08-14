import {useState, useEffect} from 'react';

export const useTimer=(hours, minutes, seconds)=>{
const [Seconds, setSeconds] = useState(seconds);
const [Minutes, setMinutes] = useState(minutes);
const [Hours, setHours] = useState(hours);

let timeInterval;
useEffect(()=>{
timeInterval=setInterval(() => {
    if(Seconds<1 && Minutes<1 && Hours<1){
       
    
        return (<>"00:00:00"</>);
        
    }else if(Seconds<1 && Minutes<1 && Hours>0){
        setSeconds(60)
        setMinutes(60)
        setHours(Hours-1)
    
    }else if(Seconds<1 && Minutes>0){
        setSeconds(60)
        setMinutes(Minutes-1)
     
    
    }
    
    
    else{
        setSeconds(Seconds-1);
    }
    }, 1000);

    return ()=>clearInterval(timeInterval)
}, [Seconds])
    


return (
    <>
    <text className="timer">
        <info className="timer-hours">{Hours} hrs</info> :
        <info className="timer-hours">{Minutes} mins</info> :
        <info className="timer-hours">{Seconds} secs</info>
        
</text>
    </>
)

};



export const Countdown =()=>{


};

