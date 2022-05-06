import React from "react";
import Sidenav from "../Sidenav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // setTimeout(function(){
  //     document.getElementById("sessionpopup").style.display="block";
  //     console.log("block")
  //         } ,5000);

  // setTimeout(function(){
  //     document.getElementById("sessionpopup").style.display ="none";
  //     console.log("none")
  //         } ,2000);

  return (
    <>
      <section
        id="Dashheader"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid  ">
          <Sidenav />

          <div className="row offset-1">
            <div className="col-10 my-1  mx-auto ">
              <div className="row">
                <div className="d-flex flex-direction-row mt-3 ">
                  <div className="Profile d-flex flex-direction-row  ">
                    <Link to="/Profile">
                      {" "}
                      <img
                        className=" mx-3 "
                        style={{ height: "6vh", width: "3vw" }}
                        src="./assets/Group 367.png"
                        alt="img"
                      />
                    </Link>
                    <p>
                      Lorem's <br /> Dashboard
                    </p>
                  </div>
                  <div className="progress mt-4 mx-4">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      3%
                    </div>
                  </div>
                  <div className="icon d-flex flex-direction-row">
                    <div className="notification mt-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-bell-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                      </svg>
                    </div>
                    <div className="chats  mt-3 mx-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-chat-right-text-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                      </svg>
                    </div>
                    <div className="coins mt-3 mx-1 d-flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-coin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                      </svg>
                      <p className="mx-2">300 DC</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-direction-row">
                  <img
                    className="mx-3 my-2 "
                    style={{ height: "27vh", width: "55vw" }}
                    src="./assets/Group 400.png"
                    alt="img"
                  />
                  <div className="trail my-2 ">
                    <p>
                      <span style={{ fontSize: "4vw" }}>7</span>
                      <br /> DAYS TRAIL <br /> PENDING
                    </p>
                    <span style={{ color: "#D80065" }}>Click to Unlock</span>
                  </div>
                </div>

                <div
                  id="oneToOnePopup"
                  className="d-flex flex-direction-row bg-light justify-content-center align-items-center   "
                >
                  <span className="mx-2 symbol">
                    &lt;&nbsp;&nbsp;&lt;&nbsp;&nbsp;&lt;{" "}
                  </span>
                  <img
                    className="mx-2"
                    src="https://img.icons8.com/ios-glyphs/50/000000/remote-desktop.png"
                  />
                  <p className="mx-2 pt-3 popupText">
                    <strong>
                      {" "}
                      Schedule a 1:1 Live Doubt Clearing Session with our
                      experts
                    </strong>
                  </p>
                  <button
                    type="button"
                    className="btn blue mx-2 "
                    style={{
                      background: "#102454",
                      color: "white",
                      borderRadius: "1rem",
                    }}
                  >
                    Book Now
                  </button>
                  <span className="mx-2 symbol ">
                    &gt;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&gt;
                  </span>
                </div>

                <div className="module_name my-1">
                  <p style={{ marginLeft: "28vw" }}>
                    <span>&#123;</span>
                    <span>Basics of statistics Basic</span>
                    <span>&#125;</span>
                  </p>
                </div>

                <div className="Course_content d-flex flex-direction-row px-5 mx-5">
                  <div className="Course content1 mx-3  d-flex flex-direction-row ">
                    <p>
                      Course <br /> Content <br /> 1
                    </p>
                    <img
                      className=""
                      style={{ height: "4vh", width: "2vw" }}
                      src="./assets/Group 353.png"
                      alt="img"
                    />
                  </div>
                  <div className="Course content2 mx-3 d-flex flex-direction-row">
                    <p>
                      Course <br /> Content <br /> 2
                    </p>
                    <img
                      className=""
                      style={{ height: "4vh", width: "2vw" }}
                      src="./assets/Group 354.png"
                      alt="img"
                    />
                  </div>
                  <div className="Course content3 mx-3 d-flex flex-direction-row">
                    <p>
                      Course <br /> Content <br /> 3
                    </p>
                    <img
                      className=""
                      style={{ height: "4vh", width: "2vw" }}
                      src="./assets/Group 354.png"
                      alt="img"
                    />
                  </div>
                  <div className="Course content4 mx-3 d-flex flex-direction-row">
                    <p>
                      Course <br /> Content <br /> 4
                    </p>
                    <img
                      className=""
                      style={{ height: "4vh", width: "2vw" }}
                      src="./assets/Group 354.png"
                      alt="img"
                    />
                  </div>
                </div>

                <div className="module_name my-1">
                  <p style={{ marginLeft: "32vw" }}>
                    <span>&#123;</span>
                    <span>Projects</span>
                    <span>&#125;</span>
                  </p>
                </div>

                <div className="project_content d-flex flex-direction-row mx-4">
                  <div className="project p1 mx-3  d-flex flex-direction-row ">
                    <img
                      className=""
                      style={{ height: "6vh", width: "3vw" }}
                      src="./assets/Group 357.png"
                      alt="img"
                    />
                    <p>
                      Project <br />1
                    </p>
                  </div>
                  <div className="project p2 mx-3 d-flex flex-direction-row">
                    <img
                      className=""
                      style={{ height: "6vh", width: "3vw" }}
                      src="./assets/Group 359.png"
                      alt="img"
                    />
                    <p>
                      Project <br />2
                    </p>
                  </div>
                  <div className="project p3 mx-3 d-flex flex-direction-row">
                    <img
                      className=""
                      style={{ height: "6vh", width: "3vw" }}
                      src="./assets/Group 359.png"
                      alt="img"
                    />
                    <p>
                      Project <br />3
                    </p>
                  </div>
                  <div className="project p4 mx-3 d-flex flex-direction-row">
                    <img
                      className=""
                      style={{ height: "6vh", width: "3vw" }}
                      src="./assets/Group 359.png"
                      alt="img"
                    />
                    <p>
                      Project
                      <br />4
                    </p>
                  </div>
                  <div className="project p4 mx-3 d-flex flex-direction-row">
                    <img
                      className=""
                      style={{ height: "6vh", width: "3vw" }}
                      src="./assets/Group 359.png"
                      alt="img"
                    />
                    <p>
                      Project
                      <br />5
                    </p>
                  </div>
                  <img
                    className=""
                    style={{ height: "10vh", width: "5vw" }}
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

export default Dashboard;
