import React from 'react';
import Sidenav from '../Sidenav';
import { Link } from "react-router-dom";





const Corporate = () => {

    // setTimeout(function(){
    //     document.getElementById("sessionpopup").style.display="block";
    //     console.log("block")
    //         } ,5000);
    
    // setTimeout(function(){
    //     document.getElementById("sessionpopup").style.display ="none";
    //     console.log("none")
    //         } ,2000);

    return (
        <>
    <section id="CorporateDashboard" className="d-flex align-items-center overflow-hidden">
        <div className="container-fluid  ">
       <Sidenav /> 

          <div className="row offset-1 ">
            <div className="col-10  my-2 mx-auto ">
              <div className="row" >

                    <div  className= 'd-flex flex-direction-row my-3  '>
                        <div className='Profile d-flex flex-direction-row  '  >
                       <Link to='/Profile' > <img  className=' mx-4' style={{height:"8vh",width:"4vw"}} src="./assets/Group 367.png" alt="img"    /></Link>
                        <p >Lorem's <br/> Dashboard</p>    
                        </div>   
                   
                        <div className='notification_icon d-flex justify-content-end ' >
                            <div className='notification_bell mt-3  '  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                            </svg>   
                            </div>                       
                        </div>  
                    </div> 
                
                        <div className='d-flex flex-direction-row' > 
                         <img  className='mx-3 my-2 ' style={{height:"30vh",width:"65vw"}} src="./assets/Group 400.png" alt="img"    />
                         
                        </div>
 
                        <div id='Schedule' className='d-flex mx-4 bg-light mb-4 justify-content-center align-items-center   ' >
                        <div className='d-flex flex-direction-row pt-4  justify-content-between align-items-center ' >
                        <p className='mx-5'><strong>Your Upcoming Events and Schedule</strong></p>
                        <p className=' mx-5 link' ><Link to="/Schedule" >View Full Schedule</Link></p>
                        </div>                     
                                          
                        <div className='d-flex flex-direction-row justify-content-between align-items-center'>
                        <p className='mx-5 pb-2 ' ><strong> 10:30am</strong> candidate meeting - Lorem Ipsum</p>
                        <p className='mx-5 pb-2 ' ><strong> 11:00am</strong> candidate meeting - Lorem Ipsum</p>
                        </div>
                        </div>

                      

                        <div className='Course_content d-flex flex-direction-row' >
                            <div className='Department content1  d-flex flex-direction-row mx-3 py-2 '>
                             <p><strong> <Link to ="/Projectsdetails">View <br/> Projects</Link></strong></p>
                                <p>You have 4 active and <br /> 10 compeleted projects </p>                              
                            <img  className='' style={{height:"7vh",width:"3.5vw"}} src="./assets/900.png" alt="img"    />
                            </div>
                            <div  className='Department content2 mx-5 d-flex mx-4 py-2' >
                            <p><strong><Link to ="/SubmissionCheck"  >View <br/> Submission</Link> </strong></p>   
                            <p>You have 40 submission and <br/> 10 shortlisted candidates</p>   
                            <img  className='' style={{height:"7vh",width:"3.5vw"}} src="./assets/907.png" alt="img"    />
                            </div>
                            <div  className='Department content3 mx-5 d-flex mx-4 py-2' >
                            <p><strong>  <Link to ="/Addprojects">Post <br/> New Project </Link>  </strong></p>   
                            <p className='mt-3' >Add a new project </p>      
                            <img  className='' style={{height:"10vh",width:"5vw"}} src="./assets/Group 1038.png" alt="img"    />
                            </div>
                           
                        </div>

                        <div id='viewreport' className='d-flex flex-direction-row my-4  justify-content-between align-items-center   ' >
                         <p className='mx-2 pt-3 sessiontext' ><strong style={{fontSize:"1.2vw"}}><Link to='/Report' >View Reports</Link></strong> &nbsp;&nbsp;&nbsp;&nbsp;  See your reports based on projects Updated</p>
                        <img className='mx-5' src="./assets/Group1.png" alt="img"/>
                       
                        </div>                      
              </div>
            </div>
          </div>
        </div>
    </section>            
        </>
    );
}

export default Corporate;
