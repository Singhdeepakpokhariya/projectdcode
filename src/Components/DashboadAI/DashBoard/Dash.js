import React from "react";
import { Link } from "react-router-dom";
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

          <div className="row  ">
            <div className="col-10 my-1  mx-auto ">
              <div className="row offset-1 ">
                <div className="d-flex flex-direction-row mt-3 offset-1 ">
                  <div className="Profile d-flex flex-direction-row  ">
                    <Link to="/Profile">
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
                  <div id="bar" className="progress mt-4 mx-4">
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
                        width="24"
                        height="24"
                        fill="#FFC62A"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="mx-2">0</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-direction-row offset-1 ">
                  <img
                    className="mx-3 my-2 "
                    style={{ height: "35vh", width: "65vw" }}
                    src="./assets/Group 400.png"
                    alt="img"
                  />
                </div>

                <div className="d-flex flex-column justify-content-start mt-5  text-center ">
                  <img
                    className="dImg"
                    style={{ height: "10vh", width: "5vw" }}
                    src="./assets/Group 1608.png"
                    alt="img"
                  />
                  <br />
                  <p>Hello</p>
                  <p>
                    Here you can see the current status of the course started
                  </p>
                  <p>Please go to explore and start your course you like</p>
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
