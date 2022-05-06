import React from "react";
import Sidenav from "../Sidenav";

const Feedback = () => {
    const star = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FDC902" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  return (
    <>
      <section id="Feedback" className="d-flex align-items-center">
        <div className="container-fluid mb-3 ">
          <Sidenav />

          <div className="row ">
            <div className="col-10   mx-auto ">
              <div className="row ">
                 <div > 
                  <div className="d-flex flex-column justify-content-center bg-light feedBackPopup" > 
                    <div className=" flex-row " ><p>Feedback</p></div>
                    <div><p>We hope you had a good session with the mentor, please rate your <br /> experience and give feedback for your teacher.</p></div>
                    <div className="d-flex flex-row text-start offset-2" >
                        <div className="d-flex flex-column mx-2" >
                        <p className="mx-5" >Punctuality</p>
                        <p className="mx-5" >Quality of  interaction</p>
                        <p className="mx-5" >Subject Knowledge</p>
                        <p className="mx-5" >Mentoring</p>
                        </div>
                        <div className="d-flex flex-column" >
                            <p>{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;</p>
                            <p>{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;</p>
                            <p>{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;</p>
                            <p>{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;{star}&nbsp;&nbsp;</p>                         
                        </div>
                    </div>
                  <div><input /></div>
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

export default Feedback;
