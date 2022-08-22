import React from "react";
import Sidenav from "../../Sidenav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Leauge = () => {
  const leagueListStudent = [];
  const [leagueList, setleagueList] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", sessionStorage.getItem("accessToken"));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://liveapi.dcodeai.com/users/studentsActivity/getStudentLeagueForLeaderBoard",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let final = JSON.parse(result);
        console.log(final.result);
        // console.log(final.result.data._id);
        // for (let i = 0; i < final.result.length; i++) {
        // if (final.result.data.moduleId == id) {
        // console.log(final.result[i]);
        setleagueList(final.result);
        // moduleQuestionData = final.result.data.questions;
        // }
        // }
      })
      .catch((error) => console.log("error", error));
  }, []);

  for (let i = 0; i < Math.min(leagueList.length, 10); i++) {
    console.log(leagueList[i]);
    leagueListStudent.push(
      <div className="d-flex flex-row student_Rank my-1">
        <p className="mx-3 pt-3">{i + 1}</p>
        <img
          className="  mt-2 "
          style={{ height: "6vh", width: "3vw" }}
          src="./assets/Group 367.png"
          alt="img"
        />
        <p className="mx-3 pt-3">{leagueList[i].name}</p>
      </div>
    );
  }
  return (
    <>
      <section
        id="Leaguepage"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid ">
          <Sidenav />
          <div className="row offset-1">
            <div className="col-12 my-4  mx-auto ">
              <div className="row">
                <div className="Submission my-2  ">
                  <div className="d-flex flex-direction-row  justify-content-center Ahead ">
                    <p className="py-2 mx-4">
                      <Link to="/Achievements">Achievement</Link>
                    </p>
                    <p className="py-2 mx-4">
                      <Link to="/ProgressBars"> Progress</Link>
                    </p>
                    <p className="py-2 mx-4 ">
                      <Link to="/League"> League</Link>
                    </p>
                  </div>

                  <div className="d-flex flex-row pt-5 ">
                    <div className="d-flex flex-column  align-items-center tropy pt-5 ">
                      <div className="d-flex flex-column golden_tropy ">
                        <img
                          className="mx-4"
                          style={{ height: "10vh", width: "5vw" }}
                          src="./assets/Group 2350.png"
                          alt="img"
                        />
                        <p className="mb-0">The Master League</p>
                        <caption>100 % All Completion</caption>
                      </div>
                      <div className="d-flex flex-row ">
                        <div className="d-flex flex-column mx-4 my-5">
                          <img
                            className="mx-4"
                            style={{ height: "8vh", width: "4vw" }}
                            src="./assets/Group 2410.png"
                            alt="img"
                          />
                          <p className="mb-0 text-center mt-1">
                            Computer Vision <br /> League
                          </p>
                          <caption className="text-center">
                            100% CV Course <br /> Completion
                          </caption>
                        </div>
                        <div className="d-flex flex-column mx-2 my-5">
                          <img
                            className="mx-4"
                            style={{ height: "8vh", width: "4vw" }}
                            src="./assets/Group 2410.png"
                            alt="img"
                          />
                          <p className="mb-0 text-center mt-1">
                            Natural Language <br /> Processing League
                          </p>
                          <caption>100% NLP Completion</caption>
                        </div>
                        <div className="d-flex flex-column mx-2  my-5">
                          <img
                            className="mx-4"
                            style={{ height: "8vh", width: "4vw" }}
                            src="./assets/Group 2410.png"
                            alt="img"
                          />
                          <p className="mb-0 text-center mt-1">
                            Data Science <br />
                            League
                          </p>
                          <caption>100% Data Completion</caption>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center list">
                      <div className="d-flex flex-column my-4 ">
                        <p>The Maestro</p>
                        {leagueListStudent}
                        {/* <div className="d-flex flex-row student_Rank">
                          <p className="mx-3 pt-3">1.</p>
                          <img
                            className="  mt-2 "
                            style={{ height: "6vh", width: "3vw" }}
                            src="./assets/Group 367.png"
                            alt="img"
                          />
                          <p className="mx-3 pt-3">sachin gupta</p>
                        </div> */}
                      </div>
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

export default Leauge;
