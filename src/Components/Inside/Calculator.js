import React, {useContext} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import FourPoint from './FourPoint';
import FivePoint from './FivePoint';
import GlobalContext from '../Context/GlobalContext';

function Calculator() {
  const {theme}=useContext(GlobalContext);
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-8'>
        <Tabs defaultActiveKey="four" id="uncontrolled-tab-example" className="mb-3">
      
      <Tab eventKey="four"  title={<> <label> 4.0 Scale</label></>} >
      <FourPoint theme={theme} />
      </Tab>
      <Tab eventKey="five" title={<> <label>  5.0 Scale</label></>}>
      <FivePoint theme={theme} />
      </Tab>
</Tabs>



        </div>

        <div className='col-sm-4'>



        </div>

      </div>

    </div>
    </>
  )
}
export default Calculator;