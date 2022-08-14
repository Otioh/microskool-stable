import React, { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

import GlobalContext from '../Context/GlobalContext';

function Popup() {
    const {theme, popMessage, popTitle, closePop, popup}=useContext(GlobalContext);

  return (
    <div style={popup===true?{display:"block"}:{display:"none"}} className="popup">
        <center>
        <div className={`popup-container ${theme}`}>
            <div className={`popup-title ${theme}`}>
{popTitle}
            </div>
            <div className={`popup-body`}>
           {popMessage}
            </div>
            <div className='popup-footer'>
           <button onClick={closePop} className="btn text-danger">
            <FontAwesomeIcon icon={faTimes} /></button>
            </div>

        </div>
        </center>
    </div>
  )
}

export default Popup