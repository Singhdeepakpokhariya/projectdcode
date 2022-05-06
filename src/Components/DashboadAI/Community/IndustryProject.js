import React from 'react';
import Sidenav from '../../Sidenav';
import {Link} from 'react-router-dom'




const industryProject = () => {

    const search =<button id="inputSearch" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg></button>   
  
  const Projectscomment = <div  className='Commentbox mx-3 my-1 ' >
  <div className='Profile d-flex flex-direction-row pt-2 '  >
  <figure>
  <img  className='mx-3' style={{height:"6vh",width:"3vw"}} src="./assets/Group 367.png" alt="img"   / >
  <figcaption className='mx-3 text-center'  >XYZ <br /> Company</figcaption>
  </figure>
  <div className='d-flex comments '><span >Lorem's Est aliquip Lorem sit eu fugiat cillum anim eiusmod </span>
  <span>Topic| 26 Oct , 11 am</span>
  <span>Eligebility : Lorem ipsum ; Lorem ipsum</span>
   </div>   
  </div> 
  <div className='d-flex justify-content-around Topics' ><p>AI</p><p>Data Vision</p><p>Computer Vision</p><p>Computer</p></div>  
  </div>

    return (
        <>
    <section id="IndustryProject" className="d-flex align-items-center">
        <div className="container-fluid  ">
       <Sidenav /> 

          <div className="row offset-2  ">
            <div className="col-10 my-4   mx-auto ">
              <div className="row " >
              <div className="input-group ">
                    <div className="form-outline">
                    <input type="search" id="form1" placeholder='Search for Topic' className="form-control" />
                    </div>
                    <button type="button" className="btn btn-info ">
                    {search}
                    </button>
                </div>

                    <div  className= 'd-flex flex-direction-row  '>

                        <div>
                            <p className='mx-3 ' ><Link to='/Community' >Community</Link> </p>
                        <div id='communitybars'  className="progress my-2 mx-3"  >
                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div> 
                       <p className='mx-5' > Industry Project</p>
                        <div id='industryProjectbar'  className="progress my-2 mx-5"  >
                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div> 
                    </div> 
                        <div className='d-flex flex-direction-row mt-3' > 
                         <img  className='mx-3 my-2 ' style={{height:"27vh",width:"55vw"}} src="./assets/Group 48.png" alt="img"    />
                        </div>

                        <div className='d-flex flex-direction-row my-2' >
                        
                        <div className='d-flex columndiv '>
                            <p className='mx-3'>Interested In  </p>
                        {Projectscomment}{Projectscomment}
                        </div>
                        <div className='d-flex columndiv '>
                            <p className='mx-3'>Featured  </p>
                        {Projectscomment}{Projectscomment}
                        </div>
                       </div>

                       <div className='d-flex flex-direction-row my-2' >
                        
                        <div className='d-flex columndiv '>
                            <p className='mx-3'>Just Launched  </p>
                        {Projectscomment}
                        </div>
                        <div className='d-flex columndiv '>
                        <p className='mx-3'>&nbsp;&nbsp;</p>
                        {Projectscomment}
                        </div>
                       </div>



              </div>
            </div>
          </div>
        </div>
    </section>            
        </>
    );
}

export default industryProject;
