import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import GlobalContext from './Context/GlobalContext';


function Roll() {
  const {theme, rollMessage, rollHeight, rollHeader, rollDisp, closeRoll}=useContext(GlobalContext);
  const endRoll=()=>{
    closeRoll()}
  return (
    <>
    <div className={`roll up `} style={{ display:rollDisp===true?"block":"none"}}>
<div className={`roll-container ${theme}`}>
        <div className="roll-header">
{rollHeader}
        </div>
        
        <div className="roll-body">
{rollMessage}
        </div>   
<div className='roll-footer '>
<button className="microskool-text-danger" onClick={endRoll}>
<FontAwesomeIcon icon={faTimes} />
</button>
</div>
      </div>
      </div>
    </>
  )
}

export default Roll;