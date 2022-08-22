import React from "react";
import { Link } from "react-router-dom";
import Sidenav from "../../Sidenav";

const Achievements = () => {
  return (
    <>
      <section
        id="report"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid  ">
          <Sidenav />
          <div className="row offset-1">
            <div className="col-10 my-3  mx-auto ">
              <div className="row">
                <div className="Submission my-2  ">
                  <div className="d-flex flex-direction-row  justify-content-center Ahead ">
                    <p className="py-2 mx-4">
                      <Link to="/Achievements">Achievement </Link>
                    </p>
                    <p className="py-2 mx-4">
                      <Link to="/ProgressBars">Progress</Link>
                    </p>
                    <p className="py-2 mx-4 ">
                      <Link to="/League">League</Link>
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-direction-row my-3 justify-content-center text-center ">
                  <div>
                    <div className="Achievement statistics mx-4 ">
                      <img
                        className="mx-3 my-4 img "
                        src="./assets/Group 1689.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">The Visionary</p>
                  </div>

                  <div>
                    <div className="Achievement statistics mx-4 ">
                      <img
                        className="mx-3 my-4 img"
                        src="./assets/Group 1693.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">The Orator</p>
                  </div>

                  <div>
                    <div className="Achievement Python mx-4 ">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1694.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">The Data Wizard</p>
                  </div>

                  <div>
                    <div className="Achievement DataScience mx-4 ">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1697.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">
                      The Python <br />
                      Charmer
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-direction-row my-3 justify-content-center text-center">
                  <div>
                    <div className="Achievement statistics mx-4 ">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1696.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">The Statistician</p>
                  </div>

                  <div>
                    <div className="Achievement statistics mx-4 ">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1699.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">
                      1st Project <br /> Completed
                    </p>
                  </div>

                  <div>
                    <div className="Achievement computervision mx-4 ">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1703.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">
                      1st Project <br /> Completed
                    </p>
                  </div>

                  <div>
                    <div className="Achievement NaturalLanguageProcessing mx-4 ">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1723.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">
                      5 Activity <br />
                      Streak
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-direction-row my-3 justify-content-center text-center">
                  <div>
                    <div className="Achievement NaturalLanguageProcessing mx-4 ">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1723.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">
                      5 Project <br />
                      Streak
                    </p>
                  </div>

                  <div>
                    <div className="Achievement NaturalLanguageProcessing mx-4 ">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/G 11.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">Know it All</p>
                  </div>

                  <div>
                    <div className="Achievement NaturalLanguageProcessing mx-4 ">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1701.png"
                        alt="img"
                      />
                    </div>
                    <p className="my-1">The Mestro</p>
                  </div>
                </div>

                <div className="d-flex justify-content-end ">
                  <img
                    className="chatbot"
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

export default Achievements;
