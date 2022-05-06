import React from "react";
import Sidenav from "../../Sidenav";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Explore = () => {
  const navigate = useHistory();

  const list2 = [];
  const img = [
    "./assets/computer.png",
    "./assets/Group 1794.png",
    "./assets/Group 1795.png",
    "./assets/Group 1806.png",
    "./assets/Group 1808.png",
    "./assets/computer.png",
  ];
  const color = [
    "#fd0077",
    "#ff8c00",
    "#00bdbe",
    "#0070bc",
    "#ffbe00",
    "#fd0077",
  ];

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("x-access-token", sessionStorage.getItem("accessToken"));

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://liveapi.dcodeai.com/users/studentsSubject/getSubjectAccess?x-access-token=",
      requestOptions
    )
      .then((response) => response.text())
      // .then((result) => setUserDatxa(result["result"]))
      .then((result) => {
        let finalData = JSON.parse(result);
        // console.log(finalData.result);
        setUserData(finalData.result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function goto(name) {
    console.log(name);
    navigate.push("/ModuleDashboard", { name: name });
  }
  // function gotoModule() {
  //   navigate.push("/Dashboard");
  // }
  for (let i = 0; i < img.length; i++) {
    list2.push(
      <div>
        <div
          onClick={() => goto(userData[i])}
          className="module statistics mx-2 my-1"
          style={{ backgroundColor: color[i] }}
        >
          <img className="mx-3 my-4 " src={img[i]} alt="img" />
        </div>
        <p>{userData[i]}</p>
      </div>
    );
  }

  // function gotoModule() {
  //   navigate.push("/Dashboard");
  // }

  // document.querySelector("#MN").addEventListener("click", function () {
  //   // if (userData === "Natural Language Processing") {
  //   //   return console.log
  //   // }
  //   console.log("abc");
  // });

  // const list = [
  //   { name: "python", img: "./assets/Group 1794.png" },
  //   { name: "statistics", img: "./assets/computer.png" },
  // ];

  // const list = ['Python','statistics']

  return (
    <>
      <section
        id="report"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid  ">
          <Sidenav />
          <div className="row offset-1">
            <div className="col-8 my-5  mx-auto ">
              <div className="row">
                <div className="Submission my-2 d-flex flex-direction-row justify-content-between  ">
                  <p className="my-2 " style={{ marginLeft: "24vw" }}>
                    <span>&#123;</span>
                    <span className="my-2">Modules</span>
                  </p>
                </div>
                <div className="d-flex flex-direction-row flex-wrap  my-3 justify-content-center text-center  ">
                  {list2}
                  {/* <div>
                    <div className="module statistics mx-2 my-1">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/computer.png"
                        alt="img"
                      />
                    </div>
                    <p>statistics</p>
                  </div> */}

                  {/* <div>
                    <div className="module Python mx-2 my-1">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1794.png"
                        alt="img"
                      />
                    </div>
                    <p>Python</p>
                  </div> */}
                  {/* <div>
                    <div className="module DataScience mx-2 my-1">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1795.png"
                        alt="img"
                      />
                    </div>
                    <p>Data Science</p>
                  </div> */}
                </div>
                {/* <div className="d-flex flex-direction-row my-3 justify-content-center text-center"> */}
                {/* <div>
                    <div className="module computervision mx-2 my-1">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1806.png"
                        alt="img"
                      />
                    </div>
                    <p>Computer Vision</p>
                  </div> */}

                {/* <div>
                    <div className="module NaturalLanguageProcessing mx-2 my-1">
                      <img
                        className="mx-3 my-4 "
                        src="./assets/Group 1808.png"
                        alt="img"
                      />
                    </div>
                    <p>Natural Language Processing</p>
                  </div> */}
                {/* </div> */}
                <div className="d-flex justify-content-end">
                  <img
                    className=""
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

export default Explore;
