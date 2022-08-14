import React, {useContext} from 'react';
import GlobalContext from './Context/GlobalContext';

function Loader() {
const {loader}=useContext(GlobalContext);
  return (
    <div style={{  visibility: loader===true? "visible" :  "hidden"}} className="loader"><div className='loader-box'> 
    <progress></progress> </div> </div>
  )
}

export default Loader;