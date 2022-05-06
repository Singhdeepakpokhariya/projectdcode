import React from "react";
import Sidenav from "../Sidenav";

const Addprojects = () => {
  return (
    <>
      <section
        id="AddProjects"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid   ">
          <Sidenav />
          <div className="row my-2 offset-1">
            <div className="col-10 my-4  mx-auto ">
              <div className="row">
                <div className="module_name my-2 d-flex flex-direction-row justify-content-between ">
                  <div className="d-flex flex-direction-column delete ">
                    <p style={{ color: "lightgray" }}>
                      Dashboard &gt; New Projects
                    </p>
                  </div>
                  <p className="my-2 " style={{marginRight:"35vw"}} >
                    <span>&#123;</span>
                    <span>Project Details</span>
                  </p>
                 
                </div>

                <div className="d-flex flex-direction-row">
                  <img
                    className="mx-3  "
                    style={{ height: "30vh", width: "65vw" }}
                    src="./assets/Group 400.png"
                    alt="img"
                  />
                   <div className="d-flex delete-btn">
                    <button
                      id="btn-edit"
                      className="mt-2"
                      
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        class="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </button>
                  </div>
                </div>

            <div className="d-flex flex-direction-row" >
                <div className="mx-3" > 
                    <p><strong>Project Title</strong></p>
                    <input id="Titleinput"  />
                </div>
                <div className="mx-5">
                     <p><strong>Eligibility</strong></p>
                    <input  className="mx-0 eligibilityinput " />
                    <input className=" mx-2 eligibilityinput" />
                    <input  className="eligibilityinput"  />
                </div>
            </div>
            <div className="d-flex flex-direction-row" >
                <div className="mx-3 my-4" > 
                    <p><strong>Problem statement</strong></p>
                    <input id="Statementinput" />
                </div>
                
            </div>
            <div className="d-flex flex-direction-row" >
                <div className="mx-3 my-1" > 
                    <p><strong>Assessment Criteria</strong></p>
                    <input id="Criteriainput"  />
                </div>
                <div className="mx-5  " > 
                    <p><strong>Timeline</strong></p>
                    <div className="d-flex flex-direction-row " >
                        <p className="" >Applications</p>
                        <span className="mx-4"><input type="date" /></span>
                        <span className=" mt-1 " ><input type="time"  /></span>
                    </div>
                    <div className="d-flex flex-direction-row " >
                        <p className="" >Submissions</p>
                        <span className="mx-4  "><input type="date" /></span>
                        <span className=" mt-1 " ><input type="time"  /></span>
                    </div>
                    <div className="d-flex flex-direction-row " >
                        <p className="" >Results</p>
                        <span className="mx-4 "><input type="date" /></span>
                        <span className=" mt-1 " ><input type="time"  /></span>
                    </div>
                    
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

export default Addprojects;
