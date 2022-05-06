import React from "react";
import Sidenav from "../Sidenav";

const Dprojects = () => {
/*
let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector("completed")
const hScroll = document.querySelector(".horizontal-scroll")
// const btnScrollLeft = document.querySelector("#btn-scroll-left")
// const btnScrollRight = document.querySelector("#btn-scroll-right")

// btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val){
  currentScrollPosition += (val * scrollAmount);

  if(currentScrollPosition > 0 ){
    currentScrollPosition = 0;
    }
    // else{
// btnScrollLeft.style.opacity = "0";

  // }
// btnScrollLeft.style.opacity = "1";


  if(currentScrollPosition < maxScroll ){
    currentScrollPosition = maxScroll;
  }
  // else{
// btnScrollRight.style.opacity = "0";
  // }
// btnScrollRight.style.opacity = "1";

sCont.style.left = currentScrollPosition + "px";
}
*/
  return (
    <>
      <section
        id="Dprojects"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid  ">
          <Sidenav />
          <div className="row offset-1">
            <div className="col-10 my-4  mx-auto ">
              <div className="row">

                <div className="module_name my-2 d-flex flex-direction-row justify-content-between " >
                  <p style={{color:"lightgray"}}>Dashboard &gt; Projects</p>
                  <p style={{ marginRight: "10vw" }}>
                    <span>&#123;</span>
                    <span>Projects</span>
                  </p>
                  <button id="btn-add" ><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-plus" viewBox="1 1 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></button>
                </div>

                <div className="d-flex flex-direction-row justify-content-center  my-1 ">
                  <p style={{ fontSize: "1.3vw" }}>Active Projects</p>
                </div>
                <div className="Project d-flex flex-direction-row justify-content-center my-1 mx-5">
                  <div className="d-flex flex-direction-column project_activity mx-5 ">
                    <div className="activity part1  ">
                      <img
                        className=""
                        style={{
                          height: "15vh",
                          width: "12vw",
                          borderRadius: "1vw",
                        }}
                        src="./assets/853.png"
                        alt="img"
                      />
                    </div>
                    <p className="text-center pt-2">Project ABC</p>
                  </div>
                  <div className="d-flex flex-direction-column project_activity mx-5 ">
                    <div className="activity part2 ">
                      {/* <img  className='' style={{height:"7vh",width:"3.5vw"}} src="./assets/900.png" alt="img"    /> */}
                    </div>
                    <p className="text-center pt-2 ">Projects DEF</p>
                  </div>

                  <div className="d-flex flex-direction-column project_activity mx-5 ">
                    <div className="activity part3 ">
                      {/* <img  className='' style={{height:"7vh",width:"3.5vw"}} src="./assets/900.png" alt="img"    /> */}
                    </div>
                    <p className="text-center pt-2 ">Project GHI</p>
                  </div>
                </div>

                <div
                  className="ProjectRow2 d-flex flex-direction-center justify-content-center my-2 mx-5"
                  style={{ marginLeft: "20vw" }}
                >
                  <div className="d-flex flex-direction-column project_activity mx-5 ">
                    <div className="activity part4 ">
                      {/* <img  className='' style={{height:"7vh",width:"3.5vw"}} src="./assets/900.png" alt="img"    /> */}
                    </div>
                    <p className="text-center pt-2 ">Project GHI</p>
                  </div>

                  <div className="d-flex flex-direction-column project_activity mx-5 ">
                    <div className="activity part5 ">
                      {/* <img  className='' style={{height:"7vh",width:"3.5vw"}} src="./assets/900.png" alt="img"    /> */}
                    </div>
                    <p className="text-center pt-2 ">Project GHI</p>
                  </div>
                </div>
                <div className="d-flex flex-direction-row justify-content-center   my-1 ">
                  <p style={{ fontSize: "1.2vw" }}>Completed Projects</p>
                </div>

                <div className="completed  d-flex flex-direction-row mx-5 ">
                  <button
                    className="btn-scroll"
                    id="btn-scroll-left"
                    // onClick="scrollHorizontally(1)"
                  >
                    &lt;&lt;
                  </button>
                  <div className="wrapper d-flex flex-direction-row justify-content-center my-2 mx-5 ">
                    <div className="d-flex flex-direction-column project_completed mx-3 ">
                      <div className="completed part1  ">
                        <img
                          className=""
                          style={{
                            height: "16vh",
                            width: "14vw",
                            borderRadius: "1vw",
                          }}
                          src="./assets/848.png"
                          alt="img"
                        />
                      </div>
                      <p className="text-center pt-2">Project 1</p>
                    </div>
                    <div className="d-flex flex-direction-column project_completed mx-3 ">
                      <div className="completed part2 ">
                        {/* <img  className='' style={{height:"7vh",width:"3.5vw"}} src="./assets/900.png" alt="img"    /> */}
                      </div>
                      <p className="text-center pt-2 ">Projects 2</p>
                    </div>
                    <div className="d-flex flex-direction-column project_completed mx-3 ">
                      <div className="completed part3 "></div>
                      <p className="text-center pt-2">Project 3</p>
                    </div>
                    <div className="d-flex flex-direction-column project_completed mx-3 ">
                      <div className="completed part4 "></div>
                      <p className="text-center pt-2">Project 4</p>
                    </div>
                     <div className='d-flex flex-direction-column project_completed mx-3 ' >
                        <div className='completed part5 '>                           
                      
                        </div>
                        <p className='text-center pt-2' >Project 5</p>
                        </div>  
                        <div className='d-flex flex-direction-column project_completed mx-3 ' >
                        <div className='completed part4 '>                           
                      
                        </div>
                        <p className='text-center pt-2' >Project 6</p>
                        </div> 
                        <div className='d-flex flex-direction-column project_completed mx-3 ' >
                        <div className='completed part5 '>                           
                        
                        </div>
                        <p className='text-center pt-2 ' >Project 7</p>
                        </div>   
                  </div>
                  <button
                    className="btn-scroll"
                    id="btn-scroll-left"
                    // onClick="scrollHorizontally(-1)"
                  >
                    &gt;&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dprojects;


