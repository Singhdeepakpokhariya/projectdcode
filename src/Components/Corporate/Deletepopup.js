import React from "react";
import Sidenav from "../Sidenav";

const CommonSubmission = () => {

  return (
    <>
      <section
        id="DeletePopup"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid  ">
          <Sidenav />
          <div className="row offset-1">
            <div className="col-10 my-5  mx-auto ">
              <div className="row">
            <div  >
               <div className="popup " >
                   <p className="pt-5" >On delete this project, it will not be visible <br /> to you and the candidates.</p>
                   <p className="my-3" >Are you sure you want to delete this project</p>
                   <div className="d-flex flex-direction-row justify-content-center"><button className="mx-3 " >Delete</button>  <button className="mx-3" >Cancle</button></div>
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

