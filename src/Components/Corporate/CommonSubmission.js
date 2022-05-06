import React from "react";
import Sidenav from "../Sidenav";

const CommonSubmission = (props) => {





const Submissionid =  <div className="d-flex my-3 "  >
<div className="submission_status mt-3">{props.checkbtn}{props.crossbtn}</div>
<div className="submission_cal mt-3">{props.calendarbtn}</div>
<div className="candidate d-flex" >
<img  className=' mx-3 my-2' style={{height:"6vh",width:"3vw"}} src="./assets/Group 367.png" alt="img"    />                            
<p className="my-3" >Lorem ipsum</p>
<div className="submission-btn">{props.bookMarkbtn}{props.halfStarbtn}</div>
</div>
</div>

  return (
    <>
      <section
        id="Submission"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid  ">
          <Sidenav />
          <div className="row offset-1">
            <div className="col-10 my-3  mx-auto ">
              <div className="row">
                <div className="Submission my-2 d-flex flex-direction-row justify-content-between ">
                  <div className="d-flex flex-direction-column delete ">
                    <p style={{ color: "lightgray" }}>
                      Dashboard &gt; Submissions
                    </p>
                  </div>
                  <p className="my-2 " style={{marginRight:"35vw"}} >
                    <span>&#123;</span>
                    <span className="my-2">Submission</span>
                  </p>
                </div>
                <div><p>{props.Filter}</p></div>
                <div className="Submission_Body d-flex" >
                 <div >
                  {Submissionid}
                  {Submissionid}
                  {Submissionid}
                  {Submissionid}
                  {Submissionid}
                  {Submissionid}
                  {Submissionid}
                 </div>
                 <div className="mx-5" >
                  {Submissionid}
                  {Submissionid}
                  {Submissionid}
                  {Submissionid}
                  {Submissionid}
                  {Submissionid}
                  {Submissionid}
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

