import React from 'react';
import CommonProgress from './CommonProgress';

const Progressbars = () => {

const circularBar =<div className="d-flex justify-content-center progress text-center" > 
<img  className='' style={{height:"18vh",width:"9vw"}} src="./assets/Group 2748.png" alt="img"    />
  <p>Over all</p>
  <p>Know your progress</p>
</div>

const bars =   <div>
<p>Subject 1</p>
<div id='progess1'  className="progress "  >
  <div className="progress-bars" role="progressbar" aria-valuenow="0"   aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<p  className="mt-4 ">Subject 2</p>
<div id='progess2'  className="progress  "  >
  <div className="progress-bas" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<p className="mt-4 ">Subject 3</p>
<div id='progess3'  className="progress  "  >
  <div className="progress-bas" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<p className="mt-4 ">Subject 4</p>
<div id='progess4'  className="progress  "  >
  <div className="progress-bas" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<p className="mt-4 ">Subject 5</p>
<div id='progess5'  className="progress  "  >
  <div className="progress-bas" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
</div>

    return (
        <>
            <CommonProgress 
             circular = {circularBar}
             progress ={bars}
             
            />
        </>
    );
}

export default Progressbars;
