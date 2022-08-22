import React from "react";
import Sidenav from "../../Sidenav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import dateFormat, { masks } from "dateformat";

const Community = () => {
  const feedBData = [];
  const [feedBack, setFeedBack] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", sessionStorage.getItem("accessToken"));
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://liveapi.dcodeai.com/users/community/getAllThread",
      requestOptions
    )
      .then((response) => response.text())
      // .then((result) => console.log(result))
      .then((result) => {
        let finalData = JSON.parse(result);
        // console.log(finalData);
        setFeedBack(finalData.result);
        // console.log(finalData.result);

        //   for (let i = 0; i < finalData.result.length; i++) {
        //     // console.log(finalData.result[i]);
        //     // let allThread = finalData.result[i];
        //     // let title = allThread.title;
        //     // let topic = allThread.topic;
        //     // let time = allThread.createdAt;
        //     // const [month, date] = time;
        //     // console.log(month);
        //     // // console.log(allThread);
        //     // console.log(title);
        //     // console.log(topic);
        //     // console.log(time);
        //     // console.log(date);
        //   }
      })
      .catch((error) => console.log("error", error));
  }, []);

  // for(let i =0 ;i< feedBack.length)

  for (let i = 0; i < feedBack.length; i++) {
    // console.log(feedBack[i].title);
    // console.log(feedBack.topic);
    // console.log(feedBack[i].updatedAt);
    feedBData.push(
      <div className="col-md-6 d-flex mx-0 px-0 pt-1 ">
        <div className="d-flex flex-direction-row mt-0 justify-content-start">
          <div className="Commentbox mt-1 ">
            <div className="Profile d-flex flex-direction-row mt-2  ">
              <img
                className=" mx-3 "
                style={{ height: "6vh", width: "3vw" }}
                src="./assets/Group 367.png"
                // src={feedBack[i].addedBy.photo}
                alt="img"
              />
              <div className="d-flex comments ">
                <span>{feedBack[i].title}</span>
                <span>
                  {feedBack[i].topic} |&nbsp;
                  {dateFormat(feedBack[i].createdAt, "d mmmm, h:MM TT")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const search = (
    <button id="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="gray"
        class="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
    </button>
  );
  const addDiss = (
    <button style={{ position: "sticky" }} id="btn_add_Diss">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        fill="currentColor"
        class="bi bi-plus-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
    </button>
  );

  return (
    <>
      <section id="Community" className="d-flex align-items-center ">
        <div className="container-fluid ">
          <Sidenav />

          <div className="row offset-2 mt-5 ">
            <div className="col-10   mx-auto ">
              <div className="row  ">
                <div className="d-flex flex-direction-row  ">
                  <div>
                    <p className="mx-3">Community</p>
                    <div id="communitybar" className="progress my-4 mx-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div>
                    <p className="mx-5 mt-2">
                      <Link to="/IndustryProject">Industry Project</Link>
                    </p>
                    <div id="industryProject" className="progress  mx-5">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  {search}
                </div>

                <div className="d-flex flex-direction-row">
                  <img
                    className="mx-3 my-2 "
                    style={{ height: "27vh", width: "55vw" }}
                    src="./assets/Group 274.png"
                    alt="img"
                  />
                </div>
                {/* <div className="d-flex flex-direction-row my-2"> */}
                {feedBData}
                {/* </div> */}

                {/* {commentdiv}
                {commentdiv}
                {commentdiv} */}
              </div>
              <div className="d-flex justify-content-end ">
                <Link to="/AddNewDisscussion">{addDiss}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
