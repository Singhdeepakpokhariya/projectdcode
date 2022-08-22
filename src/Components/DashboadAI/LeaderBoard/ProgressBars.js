import React from "react";
import CommonProgress from "./CommonProgress";
import { ProgressBar } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import { useEffect, useState } from "react";

const Progressbars = () => {
  const barDetails = [];
  const cirularB = [];
  const [achievementData, setachievementData] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", sessionStorage.getItem("accessToken"));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://liveapi.dcodeai.com/users/studentsActivity/getStudentProgressForLeaderBoard",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let final = JSON.parse(result);
        console.log(final.result);
        setachievementData(final.result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  // let totalProgress;

  let progressBarData = Object.entries(achievementData);

  console.log(progressBarData);

  for (const [key, { attempted, total }] of progressBarData) {
    // console.log(key);
    // console.log(attempted);
    // console.log(total);
    // for (let i = 0; i < progressBarData[i]; i++) {
    //   console.log(key[i]);
    // }

    const percentage = (attempted / total) * 100;
    // console.log(percentage);
    if (key == "totalProgress") {
      // totalProgress = percentage;
      cirularB.push(
        <div className="d-flex justify-content-center progress text-center">
          <div style={{ width: 200, height: 200, marginLeft: 90 }}>
            <CircularProgressbar
              styles={{
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `rgba(62, 152, 199, ${100})`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Customize transition animation
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  // Rotate the path
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: "#d6d6d6",
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Rotate the trail
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                // Customize the text
                text: {
                  // Text color
                  fill: "#f88",
                  // Text size
                  fontSize: "6px",
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: "#3e98c7",
                },
              }}
              value={percentage}
              text={`${percentage.toFixed(2)}%`}
            />
          </div>
          <p className="mt-3">Over all</p>
          <p>Know your progress</p>
        </div>
      );

      console.log(key);
    } else {
      console.log(key);
      barDetails.push(
        <div>
          <p className="my-3">{key}</p>
          {/* <progress min="0" max="100" value="60"></progress> */}
          <ProgressBar
            className="pro"
            variant="success"
            now={percentage}
            label={percentage}
          />

          {/* <p className="mt-4 ">Subject 2</p>
        <ProgressBar className="pro" variant="info" now={30} label={`${30}%`} />
        <p className="mt-4 ">Subject 3</p>
        <ProgressBar
          className="pro"
          variant="danger"
          now={30}
          label={`${30}%`}
        />
        <p className="mt-4 ">Subject 4</p>
        <ProgressBar
          className="pro"
          variant="warning"
          now={30}
          label={`${30}%`}
        />
        <p className="mt-4 ">Subject 5</p>
        <ProgressBar className="pro" variant="" now={30} label={`${30}%`} /> */}
        </div>
      );
    }
  }

  // for (let i = 0; i < progressBarData.length; i++) {
  //   console.log(progressBarData[i]);
  // }

  return (
    <>
      <CommonProgress circular={cirularB} progress={barDetails} />
    </>
  );
};

export default Progressbars;
