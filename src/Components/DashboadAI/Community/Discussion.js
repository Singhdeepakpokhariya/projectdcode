import React from "react";
import Sidenav from "../../Sidenav";

const Discussion = () => {
  const chat = 
    <button id="chatIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="gray"
        class="bi bi-chat-left-text-fill"
        viewBox="0 0 16 16"
      >
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
      </svg>
    </button>
  

  const like = 
    <button id="likeIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="gray"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </button>

  const share = 
    <button id="shareIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="gray"
        class="bi bi-share-fill"
        viewBox="0 0 16 16"
      >
        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
      </svg>
    </button>

    const report =<button  id="reportIcon" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-flag-fill" viewBox="0 0 16 16">
    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
  </svg></button>

const FaQ =  
<div className="mt-3  queries">
   <div className="Profile d-flex flex-direction-row  pt-3  ">
  <img
    className=" mx-3 my-1"
    style={{ height: "6vh", width: "3vw" }}
    src="./assets/Group 367.png"
    alt="img"
  />
  <div className="flex-column pt-1" >
    <p className="mb-1">
      26 October ,11am  200 Dc 
    </p>
    <p >
    Velit ut minim consectetur officia culpa est velit commodo
    nisi aute dolor ullamco. 
    </p>
  </div>
  <div className="flex-column mx-5 reportdiv " >
    <p className="time" >2 hours back</p>
    <span className="my-1" >{report} &nbsp;&nbsp;&nbsp; {like}</span>
  </div>
</div>
</div>
  

  return (
    <>
      <section id="Discussion" className="d-flex align-items-center">
        <div className="container-fluid mb-3 ">
          <Sidenav />

          <div className="row  offset-2  ">
            <div className="col-10   mx-auto ">
              <div className="row ">
                <div className="moduleHead  d-flex flex-direction-row justify-content-between mt-2 ">
                  <div className="d-flex flex-direction-column  ">
                    <p style={{ color: "lightgray" }}>
                      Community&gt;Discussion
                    </p>
                  </div>
                  <p className="mt-3" style={{ marginRight: "35vw" }}>
                    <span>&#123;</span>
                    <span>Discussion</span>
                  </p>
                </div>
                <div className="d-flex flex-column discussionTopic">
                  <p>Ipsum aliquip esse occaecat consectetur duis. </p>
                  <p>Topic</p>
                </div>

                <div>
                  <div className="DiscussionBox">
                    <div className="Profile d-flex flex-direction-row  pt-2  ">
                      <img
                        className=" mx-3 "
                        style={{ height: "6vh", width: "3vw" }}
                        src="./assets/Group 367.png"
                        alt="img"
                      />
                      <p>
                        26 October ,11am <br /> 200 Dc
                      </p>
                    </div>
                    <p className="px-3">
                      Velit ut minim consectetur officia culpa est velit commodo
                      nisi aute dolor ullamco. Amet laborum deserunt aliqua
                      nostrud enim duis id qui. Officia tempor qui nulla sint do
                      voluptate do cillum est do adipisicing fugiat magna
                      proident. Commodo sit esse magna exercitation incididunt
                      consectetur est Lorem proident elit culpa consequat
                      deserunt. Id ex ipsum et nostrud quis nostrud sunt eiusmod
                      deserunt qui sunt voluptate.
                    </p>
                    <hr />
                    <div>
                      <span className="mx-3">{chat}</span>
                      <span className="mx-2">{like}</span>
                      <span style={{ marginLeft: "45vw" }}>{share}</span>
                    </div>
                  </div>
                
                <div className="mt-3  queries">

                <div className="Profile d-flex flex-direction-row  pt-3  ">
                      <img
                        className=" mx-3 my-1"
                        style={{ height: "6vh", width: "3vw" }}
                        src="./assets/Group 367.png"
                        alt="img"
                      />
                      <div className="flex-column pt-1" >
                        <p className="mb-1">
                          26 October ,11am  200 Dc <span className="mx-4" id='default' >No Comments of this discussion, be the first to comment</span>
                        </p>
                        <p >
                        Velit ut minim consectetur officia culpa est velit commodo
                        nisi aute dolor ullamco. 
                        </p>
                      </div>
                      <div className="flex-column mx-5 reportdiv " >
                        <p className="time" >2 hours back</p>
                        <span className="my-1" >{report} &nbsp;&nbsp;&nbsp; {like}</span>
                      </div>
                  </div>

                </div>
                  {FaQ}
                  {FaQ}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discussion;
