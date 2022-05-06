import React from "react";
import Sidenav from "../Sidenav";

const CommonSubmission = () => {

  return (
    <>
      <section
        id="report"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid  ">
          <Sidenav />
          <div className="row offset-1">
            <div className="col-10  mx-auto ">
              <div className="row">
                <div className="Submission my-2 d-flex flex-direction-row justify-content-between ">
                  <div className="d-flex flex-direction-column delete ">
                    <p style={{ color: "lightgray" }}>
                      Dashboard &gt; Submissions
                    </p>
                  </div>
                  <p className="my-2 " style={{marginRight:"35vw"}} >
                    <span>&#123;</span>
                    <span className="my-2">Report</span>
                  </p>
                </div>
                <div className="d-flex flex-direction-row justify-content-center " >
                    <div className="report graph1 my-1 mx-2 " >
                        <p className="mx-4 my-3" >Student Applying</p>
                        <img  className='mx-5' style={{height:"25vh",width:"22vw"}}  src="./assets/Group 230.png" alt="img"    />
                        
                    </div>
                    <div className="report graph2 my-1 mx-3 " >
                    <p className="mx-4 my-2" >Lorem ipsum</p>
                        <img  className='mx-5' style={{height:"25vh",width:"22vw"}}  src="./assets/Group 10.png" alt="img"    />
                        
                    </div>
                </div>
                <div className="d-flex flex-direction-row justify-content-center" >
                    <div className="report graph3 my-3 " >  
                    <p className="mx-4 my-2" >Lorem ipsum</p>
                        <img  className='mx-5 my-5' style={{height:"15vh",width:"8vw"}}  src="./assets/Group 279.png" alt="img"    />
                    </div>
                    <div className="report graph4 my-3 mx-2 d-flex">
                    <img  className='mx-3 my-5' style={{height:"26vh",width:"16vw"}}  src="./assets/Group 211.png" alt="img"    />
                    <div className="" >
                    <p className="mt-2">Regional Applying</p>
                    <div className="regionaldata">
                        <div className="d-flex flex-direction-row" ><span className="colour1 mx-2 mt-1" >&nbsp;&nbsp;&nbsp;&nbsp;</span><p>Delhi 430</p></div>
                        <div className="d-flex flex-direction-row" ><span className="colour2 mx-2 mt-1" >&nbsp;&nbsp;&nbsp;&nbsp;</span><p>Rajasthan 350-430</p></div>
                        <div className="d-flex flex-direction-row" ><span className="colour3 mx-2 mt-1" >&nbsp;&nbsp;&nbsp;&nbsp;</span><p>kolkata 250-450</p></div>
                        <div className="d-flex flex-direction-row" ><span className="colour4 mx-2 mt-1" >&nbsp;&nbsp;&nbsp;&nbsp;</span><p>karnataka 100-250</p></div>
                        <div className="d-flex flex-direction-row" ><span className="colour5 mx-2 mt-1" >&nbsp;&nbsp;&nbsp;&nbsp;</span><p>hyderabad 50-100</p></div>
                    </div>
                    </div>

                    </div>
                    <div className="report graph5 my-3 mx-2">
                        <p className="mx-4 my-2" >Lorem ipsum</p>
                        <img  className='mx-5 my-5' style={{height:"15vh",width:"10vw"}}  src="./assets/Group 276.png" alt="img"    />
                    </div>
                </div>               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonSubmission;

