import React from 'react';
import CommonProgress from './CommonProgress';

const Progressbefore = () => {

    const beforeProgress =<div className="d-flex justify-content-center mt-5 mx-5 progress text-center" > 
<img  className='' style={{height:"18vh",width:"9vw"}} src="./assets/Group 748.png" alt="img"    />
  <br />
  <p>No course started</p>
</div>

const course =<div className="d-flex justify-content-center mt-5 doru  text-center" > 
<img  className='doruimg' style={{height:"10vh",width:"5vw"}} src="./assets/Group 1608.png" alt="img"    />
  <br />
  <p>Start a course to see</p>
  <p>your progress</p>
</div>
    return (
        <>
            <CommonProgress 
                zeroProgress ={beforeProgress}
                startCourse = {course} 
                           
            />
        </>
    );
}

export default Progressbefore;
