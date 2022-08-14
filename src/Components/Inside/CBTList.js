import React, { useContext} from 'react';
import GlobalContext from '../Context/GlobalContext';

function CBTList({toCBT, closePop}) {
    const {theme}=useContext(GlobalContext);
  return (
    <div className='container'>
        <div className="row">
            <div className='col-sm-6'>
                <ul className={`list-group `}>
                      <li className={`list-group-item d-flex justify-content-between align-items-center ${theme}`} onClick={
                          () => {
                              toCBT();
                              closePop();
                          }
                      }>
                    <p className={`list-group-item-text `}>Use of English & Library Skill</p>
                    </li>

                      <li className={`list-group-item d-flex justify-content-between align-items-center ${theme}`} onClick={
                          () => {
                              toCBT();
                              closePop();
                          }
                      }>
                    <p className={`list-group-item-text `}>Anti-Corruption</p>
                    </li>

                      <li className={`list-group-item d-flex justify-content-between align-items-center ${theme}`} onClick={
                          () => {
                              toCBT();
                              closePop();
                          }
                      }>
                    <p className={`list-group-item-text `}>History & Philosophy of Science</p>
                    </li>

                      <li className={`list-group-item d-flex justify-content-between align-items-center ${theme}`} onClick={
                          () => {
                              toCBT();
                              closePop();
                          }
                      }>
                    <p className={`list-group-item-text `}>Philosophy & Logic</p>
                    </li>
                </ul>
            </div>
            <div className='col-sm-6'>
            <ul className='list-group'>

                    <li className={`list-group-item d-flex justify-content-between align-items-center ${theme}`} onClick={
                        ()=>{
                            toCBT();
                            closePop();
                        }
                    }>
                    <p className={`list-group-item-text `}>Nigerian People & Culture/Citenship Education</p>
                    </li>

                      <li className={`list-group-item d-flex justify-content-between align-items-center ${theme}`} onClick={
                          () => {
                              toCBT();
                              closePop();
                          }
                      }>
                    <p className={`list-group-item-text `}>Entrepreneurship Development</p>
                    </li>

                      <li className={`list-group-item d-flex justify-content-between align-items-center ${theme}`} onClick={
                          () => {
                              toCBT();
                              closePop();
                          }
                      }>
                    <p className={`list-group-item-text `}>Introduction to Computer Programming</p>
                    </li>

                </ul>

            </div>

        </div>
    </div>
  )
}

export default CBTList