import React from "react";
import Sidenav from "../Sidenav";

const CommonSubmission = () => {

  const editingbtn = <button className="icon-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-pencil"viewBox="0 0 16 16" >
<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
</svg></button>


const deletebtn = <button id='btn-delete' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>


const calendar = <button className="icon-btn mx-2" ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="gray" class="bi bi-calendar2-range-fill" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM10 7a1 1 0 0 0 0 2h5V7h-5zm-4 4a1 1 0 0 0-1-1H1v2h4a1 1 0 0 0 1-1z"/>
</svg></button>

const Meeting = <div className="d-flex flex-direction-row justify-content-between ">
<p>12:30 - 13:30</p>
<p>Title for Meeting</p>
<p>With Lorem Ipsum</p>   
<span>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span> 
</div>

  return (
    <>
      <section
        id="Submission"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid ">
          <Sidenav />
          <div className="row offset-1">
            <div className="col-8  my-3 mx-auto ">
              <div className="row">
                <div className="Submission my-1 d-flex flex-direction-row justify-content-between ">
                  <div className="d-flex flex-direction-column delete ">
                    <p style={{ color: "lightgray" }}>
                      Dashboard &gt; Submissions
                    </p>
                  </div>
                  <p className="my-2 " style={{marginRight:"25vw"}} >
                    <span>&#123;</span>
                    <span className="my-2">Schedule</span>
                  </p>
                </div>

                <div className="d-flex py-4 my-1 schedule_table" >
                  <div className="d-flex flex-direction-row" >
                   {calendar} <input  className="date mx-1" placeholder="  start" /> &nbsp;&nbsp;to&nbsp;&nbsp; <input className="date" placeholder="  end"/> 
                    <input className="titledetails mx-4" placeholder="  title" /> <input className="titledetails " placeholder="  with"/>
                   </div>

                  <div  className="d-flex flex-direction-row my-2 " >
                  <input type="date" className="calendar" />  <input className="agenda mx-4" placeholder="  Agenda"/> <button className="schedulebtn" >Schedule</button>
                  </div>
                </div>

                <div className="d-flex meeting_details" >
                    <p className="my-1" ><strong>Today</strong></p>
                    <hr />
                    <div className="d-flex flex-direction-row justify-content-between ">
                      <p>12:30 - 13:30</p>
                      <p >Title for Meeting</p>
                      <p>With Lorem Ipsum</p>                     
                      <span>{editingbtn} &nbsp;&nbsp; {deletebtn} </span> 
                    </div>
                  {Meeting}
                  {Meeting}
                  {Meeting}
                  {Meeting}

                  <p className="mb-1 mt-3"><strong>Tomorrow</strong></p>
                    <hr />
                  {Meeting}
                  {Meeting}
                  {Meeting}
                  {Meeting}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonSubmission;

