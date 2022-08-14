import React from 'react';
import MicroskoolIcon from '/xampp/htdocs/microskool-stable/src/ImageResources/micro.png';

function Loader() {
  return (
    <div className='container'><center>
        <br/><br/><br/><br/><br/><br/>
<img className="navbar-brand microskool-icon" alt='Microskool-Logo' src={MicroskoolIcon} href="welcome" />
<br/><progress></progress>
</center>
    </div>
  )
}

export default Loader;