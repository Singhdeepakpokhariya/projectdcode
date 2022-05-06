import React from 'react';
import Sidenav from '../Sidenav';
import { Link } from "react-router-dom";


const CommonProject = (props) => {
    return (
        <>
           <section
        id="ProjectsDetails"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid mt-3  ">
          <Sidenav />
          <div className="row  offset-1">
            <div className="col-10   mx-auto ">
              <div className="row ">

                <div className="moduleHead  d-flex flex-direction-row justify-content-between mt-4 " >
                  <div className='d-flex flex-direction-column delete mt-1' >
                  <p style={{color:"lightgray"}}>Dashboard &gt; Projects &gt; Projects details</p>
                  {props.delete}
                  </div>
                  <p className='mt-3' style={{ marginLeft: "1vw" }}>
                    <span>&#123;</span>
                    <span>Project Details</span>
                  </p>
                  <div className='d-flex delete' >
                  {props.add}
               <Link to ="/ProjectDedit" >{props.editbutton}</Link>
                <p className='ptext'><strong>{props.interest}</strong></p> 
                  </div>
                </div>

                <div className='d-flex flex-direction-row' > 
                         <img  className='mx-5  ' style={{height:"30vh",width:"65vw"}} src="./assets/Group 400.png" alt="img"    />
                         
                        </div>
               
                <div className="completed  d-flex flex-direction-row ">
                  <button
                    className="btn-scroll"
                    // id="btn-scroll-left"
                    // onClick="scrollHorizontally(1)"
                  >
                    &lt;&lt;
                  </button>
                  <div className='d-flex flex-direction-coloumn mx-4 my-2 details'>
                      <div className='d-flex flex-direction-row  ' >
                          <div className=''>
                            <div className='d-flex' ><p className='h5' >Project Title</p><p style={{marginLeft:"16vw"}} >{props.editing}</p></div>
                            <p>Qui qui nostrud qui incididunt in magna ipsum qui do minim. Veniam labore est elit laborum dolore culpa. Nostrud mollit non enim magna dolor nisi consectetur velit non ex aute. Est velit qui quis id non sint do laborum.</p>  
                          </div>
                          <div >
                          <div className='d-flex'><p className='h5' >Eligibility</p><p style={{marginLeft:"24vw"}} >{props.editing}</p></div>

                              <table  >
                                  <tr>
                                      <th>Lorem ipsum</th>
                                      <th>Lorem ipsum</th>
                                      <th>Lorem ipsum</th>
                                  </tr>
                                  <tr>
                                      <td>Lorem ipsum</td>
                                      <td>Lorem ipsum</td>
                                      <td>Lorem ipsum</td>
                                  </tr>
                              </table>
                          </div>
                      </div>


                      <div className=' flex-direction-column ' >
                     <div className='d-flex' ><p className='h5' >Problem statement</p><p style={{marginLeft:"12vw"}} >{props.editing}</p></div>
                            <p>Qui qui nostrud qui incididunt in magna ipsum qui do minim. Veniam labore est elit laborum dolore culpa. Nostrud mollit non enim magna dolor nisi consectetur velit non ex aute. Est velit qui quis id non sint do laborum.</p>  
                      </div>


                      <div className='d-flex flex-direction-row   '>
                        <div>
                          <div className='d-flex' ><p className='h5' >Assessment Criteria</p><p style={{marginLeft:"11vw"}} >{props.editing}</p></div>
                            <p>Lorem10 Nostrud mollit non enim magna dolor nisi consectetur velit non ex aute. Est velit qui quis id non sint do laborum.</p>    
                        </div>
                        <div className='d-flex  timeline' >
                        <div className='d-flex' > <span  className='h5' style={{marginLeft:"3vw"}} ><strong>Timeline</strong></span><p style={{marginLeft:"28vw"}} >{props.editing}</p>  </div>
                           <div className='d-flex flex-direction-row' >
                           <div className='mx-5 my-2  text-center   ' >
                                <div style={{height:"10vh",width:"5vw",backgroundColor:"#F49B00",borderRadius:"1.2rem"}} ></div>
                                <p className = "mt-2">Applications</p>
                            </div>
                            <hr/>
                            <div className='mx-5 my-2 text-center' >
                            <div style={{height:"10vh",width:"5vw",backgroundColor:"#F49B00",borderRadius:"1.2rem"}} ></div>
                                <p className = "mt-2">Submissions</p>
                            </div>
                            <hr />
                            <div className='mx-5 my-2 text-center '  >
                            <div style={{height:"10vh",width:"5vw",backgroundColor:"#F49B00",borderRadius:"1.2rem"}} ></div>
                                <p className = "mt-2">Results</p>
                            </div>
                           </div>
                            </div>
                      </div>
                  </div>
                  <button
                    className="btn-scroll"
                    // id="btn-scroll-left"
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
}

export default CommonProject;
