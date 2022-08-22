import React from "react";
import Sidenav from "../../Sidenav";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

let ind = 0;

const QDash = () => {
  // const navigate = useHistory();

  const location = useLocation();
  const data = location.state.data;
  // const projectData = location.state.projectData;
  const id = location.state.id;
  const name = location.state.name;
  const path = location.state.path;
  const type = location.state.type;

  // console.log(name);

  const QData = [];
  let QQData = [];
  const moduleName = [];
  const inputAnswer = [];
  const restbtn = [];
  // const projectName = [];

  const [questionsData, setquestionsData] = useState([]);
  const [questionData, setquestionData] = useState([]);
  // const [projects, setprojects] = useState([]);
  // const [project, setproject] = useState([]);
  // let moduleQuestionData;

  useEffect(() => {
    fetchData(id);
  }, []);
  // console.log(moduleQuestionData);
  // console.log(questionData);

  function filterData(ind) {
    if (ind >= 0 && ind < questionsData.length)
      setquestionData(questionsData[ind]);
    // console.log(questionData);
  }

  function fetchData(id) {
    ind = 0;
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", sessionStorage.getItem("accessToken"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      moduleId: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`https://liveapi.dcodeai.com/users/${path}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let final = JSON.parse(result);
        // console.log(final.result);
        // console.log(final.result.data._id);
        // for (let i = 0; i < final.result.length; i++) {
        if (type == 1) {
          if (final.result.data.moduleId == id) {
            console.log(final.result.data);
            setquestionsData(final.result.data.questions);
            if (final.result.data.questions.length > 0)
              setquestionData(final.result.data.questions[0]);
            // moduleQuestionData = final.result.data.questions;
          }
        } else if (type == 2 || type == 3) {
          if (final.result.moduleId == id) {
            console.log(final.result);
            setquestionsData(final.result.projects);
            if (final.result.projects.length > 0)
              setquestionData(final.result.projects[0]);
            console.log(final.result.projects[0]);
          }
        }
      })
      .catch((error) => console.log("error", error));
  }
  let finalAnswer, currentAnswer;

  if (ind < questionsData.length) {
    finalAnswer = questionData.finalAnswer;
    if (questionData.type == "write" || questionData.type == "dragDrop") {
      restbtn.push(
        <button
          className="mx-2"
          onClick={() => {
            document.getElementById("inputText").innerHTML = "";
          }}
        >
          &#x21bb;
        </button>
      );
      inputAnswer.push(
        <textarea
          id="inputText"
          style={{ height: "15vh", width: "40vw", resize: "none" }}
        ></textarea>
      );
    }

    // console.log(questionData[i]);
    if (questionData.questionContent != null)
      for (let j = 0; j < questionData.questionContent.length; j++) {
        if (questionData.type == "choose") {
          QQData.push(
            <p
              className="mx-2 "
              onClick={() => {
                if (questionData.type == "choose") {
                  currentAnswer = questionData.questionContent[j].name;
                } else {
                  document.getElementById("inputText").innerHTML +=
                    questionData.questionContent[j].name;
                }
              }}
            >
              {questionData.questionContent[j].name}
            </p>
          );
        } else {
          QQData.push(
            <span
              className="mx-2 my-2"
              onClick={() => {
                if (questionData.type == "choose") {
                  currentAnswer = questionData.questionContent[j].name;
                } else {
                  document.getElementById("inputText").innerHTML +=
                    questionData.questionContent[j].name;
                }
              }}
            >
              {questionData.questionContent[j].name}
            </span>
          );
        }
      }
    if (questionData.description != "")
      var des = (
        <div dangerouslySetInnerHTML={{ __html: questionData.description }} />
      );
    if (questionData.htmlContent != "")
      var main = (
        <div
          className=" renderQuestion mt-3"
          style={{ height: "70vh", width: "50vw", overflow: "scroll" }}
          dangerouslySetInnerHTML={{ __html: questionData.htmlContent }}
        />
      );
    QData.push(
      <div className=" offset-2 mt-5">
        <div className=" d-flex flex-row my-1">
          <p style={{ fontSize: "2vw" }}>
            <span>&#125;</span>
          </p>
          <p className="h5 mx-3 mt-3">{questionData.name}</p>
        </div>
        {main}
        {des}
        {inputAnswer}
        <p> {QQData}</p>
      </div>
    );
    QQData = [];
  }

  function goto(i) {
    fetchData(data[i]._id);
    // fetchData(projectData[i]._id);
    // console.log(id);
    // console.log(moduleData);
    // console.log(projectData);
    // console.log(name);

    // navigate.push("/QDash", {
    // id = moduleData[i]._id;
    // moduleData = moduleData;
    // name = name;
    // }
    // );
  }

  // console.log(name);
  for (let i = 0; i < data.length; i++) {
    // console.log(moduleData);
    moduleName.push(
      <div>
        <div onClick={() => goto(i)} className="title__Name text-center">
          {/* <div className="Course content2 mx-2 d-flex flex-direction-row my-2"> */}
          <p>{data[i].name}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section id="QDash" className="d-flex align-items-center ">
        <div className="container-fluid  ">
          <Sidenav />

          <div className="row offset-1">
            <div className="col-12   mx-auto ">
              <div className="row">
                <div className="d-flex flex-row">
                  <div className="module__title__Name  ">
                    <div className="modoule__Name mx-2 my-4  d-flex flex-row">
                      <p className="mx-4 ">{name}</p>
                      <select className="mx-4" id="Language">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                      </select>
                      <p>{"coin"}</p>
                    </div>
                    <div
                      className=" renderQuestion"
                      style={{
                        height: "85vh",
                        width: "25vw",
                        overflow: "scroll",
                      }}
                    >
                      {moduleName}
                    </div>
                  </div>
                  <div className="moduleQuestions">
                    {QData}

                    <div className="d-flex justify-content-center button_div">
                      <button
                        onClick={() => filterData(--ind)}
                        id="Back"
                        className="previous round"
                      >
                        &#8249;
                      </button>
                      {restbtn}
                      <button
                        onClick={() => {
                          // if (questionData.type == "choose") {
                          //   currentAnswer = "";
                          // }
                          if (
                            questionData.type == "dragDrop" ||
                            questionData.type == "write"
                          ) {
                            currentAnswer =
                              document.getElementById("inputText").value;
                          }
                          if (
                            questionData.type == "dragDrop" ||
                            questionData.type == "write" ||
                            questionData.type == "choose"
                          ) {
                            console.log(finalAnswer);
                            console.log(currentAnswer);
                            if (finalAnswer == currentAnswer) {
                              if (
                                questionData.type == "dragDrop" ||
                                questionData.type == "write"
                              ) {
                                document.getElementById("inputText").innerHTML =
                                  "";
                              }
                              filterData(++ind);
                            }
                          } else {
                            filterData(++ind);
                          }
                        }}
                        id="Forward"
                        className="next round"
                      >
                        &#8250;
                      </button>
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

export default QDash;
