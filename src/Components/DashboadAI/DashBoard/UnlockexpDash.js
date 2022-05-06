import React from "react";
import Sidenav from "../../Sidenav";

const Dash = () => {
  return (
    <>
      <section
        id="Dashheader"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid  ">
          <Sidenav />
          <div className="row my-5 ">
            <div className="col-10 my-5  mx-auto ">
              <div className="row  ">
                  <div  id="main" className="d-flex flex-column text-center " >
                    <div className="my-3" ><p><strong>Unlock the full DcodeAI Experience</strong></p></div>
                    <div>
                        <span ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4FBBBD" class="bi bi-unlock-fill" viewBox="0 0 16 16">
                        <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
                        </svg></span>
                        <p className="mt-4" >Get access to all modules <br /> Enter leauges and complete <br /> Industry projects and challeneges</p>
                    </div>
                    <div className="d-flex flex-row justify-content-center my-5 " >
                        <p className="d-flex flex-column pt-1 "><button id="unlimited" className="mx-5 px-5 py-1 mb-2" >Get Unlimited Access</button>Starts at `499/month</p>
                        <p className="" ><button id="option" className="mx-5  px-5 py-1" >See Other Options</button></p>
                    </div>
                  </div>
                <div className="d-flex justify-content-end ">
                  <img
                    style={{ height: "12vh", width: "6vw" }}
                    src="./assets/Group 342.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dash;
