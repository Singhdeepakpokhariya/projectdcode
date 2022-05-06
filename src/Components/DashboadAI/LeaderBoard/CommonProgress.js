import React from "react";
import Sidenav from "../../Sidenav";
import { Link } from "react-router-dom";

const CommonProgress = (props) => {
  return (
    <>
      <section
        id="report"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid ">
          <Sidenav />
          <div className="row offset-1">
            <div className="col-10 my-4  mx-auto ">
              <div className="row">
                <div className="Submission my-2  ">
                  <div className="d-flex flex-direction-row  justify-content-center Ahead ">
                    <p className="py-2 mx-4" ><Link to="/Achievements" >Achievement</Link></p>
                    <p className="py-2 mx-4" > <Link  to='/ProgressBars'> Progress</Link></p>
                    <p className="py-2 mx-4 " ><Link  > Leauge</Link></p>
                  </div>
              
                </div>

              <div className="d-flex flex-direction-row mx-5 my-5 Pro ">
                  {props.circular}
                  {props.zeroProgress}

                  <div className="d-flex  mx-5 subjects" >
                    {props.progress}
                    {props.startCourse}
                     
                  </div>
              </div>
                
                
              
                   


                

                 

               

                <div className="d-flex justify-content-end" > 
                 <img  className='' style={{height:"12vh",width:"6vw"}} src="./assets/Group 342.png" alt="img"    />
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonProgress;
