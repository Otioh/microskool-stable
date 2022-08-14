import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalContext from '../Context/GlobalContext';

function SubMenus(props) {
    const {fall, setfall, history}=useContext(GlobalContext);

        

            return ( <><div className={`sub-tiem `} onClick={props.items.action}>
            <div className="icon-holder">
            <FontAwesomeIcon icon={props.items.icon}/>
            </div>
            
            <text style={{display:fall===true?"none":"block"}}>{props.items.name}</text>
            
            </div>
            <br/>
            <br/>
            </>
   
  )
}

export default SubMenus;