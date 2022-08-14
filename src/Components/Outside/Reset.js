import React from 'react';
import NavBar from './NavBar';

function Reset() {
  return (
    <>
    <NavBar/>
<div className='pane micro-margin'>
  <div className='row'>
<div className="col-sm-4">


</div>

<div className="col-sm-4">
<div className='card microskool-card bg-white'>
<div className='form'>
      <legend >Recover Account</legend>
      <div className='form-group  micro-margin'>
      <input type="email"  className='form-control' placeholder="E-Mail" id="email" />
      </div>
      <div className='form-group  micro-margin'>
      <input type="text"  className='form-control' placeholder="Matric No" id="matric" />
      </div>
      <div className='form-group micro-margin'>
      <input  type="tel"  className='form-control' placeholder=" Phone" id="phone" />
      </div>


</div>
<button className="microskool-button">Recover Password</button>

</div>

</div>

<div className="col-sm-4">


</div>


  </div>
</div>




    </>
  )
}

export default Reset