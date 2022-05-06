import React from 'react';
import Sidenav from '../../Sidenav';
import {Link} from 'react-router-dom'




const Community = () => {

    const comment = <div  className='Commentbox mx-3 ' >
    <div className='Profile d-flex flex-direction-row pt-2 '  >
    <img  className=' mx-3 ' style={{height:"6vh",width:"3vw"}} src="./assets/Group 367.png" alt="img"    />
    <div className='d-flex comments '><span >Lorem's Est aliquip Lorem sit eu fugiat cillum anim eiusmod </span>
    <span>Topic| 26 Oct , 11 am</span> </div>   
    </div>   
    </div>

    const commentdiv = <div className='d-flex flex-direction-row my-2' >
                        {comment}{comment}
                       </div>

    const search =<button id="search" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg></button>                   

    return (
        <>
    <section id="Community" className="d-flex align-items-center">
        <div className="container-fluid mb-1 ">
       <Sidenav /> 

          <div className="row offset-2  ">
            <div className="col-10   mx-auto ">
              <div className="row " >

                    <div  className= 'd-flex flex-direction-row mt-5 '>
                        <div>
                            <p className='mx-3' >Community</p>
                        <div id='communitybar'  className="progress my-4 mx-3"  >
                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        <div> 
                       <p className='mx-5 mt-2'  ><Link to='/IndustryProject' >Industry Project</Link></p>
                        <div id='industryProject'  className="progress  mx-5"  >
                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div> 
                        {search} 

                   
                    </div> 
                
                        <div className='d-flex flex-direction-row' > 
                         <img  className='mx-3 my-2 ' style={{height:"27vh",width:"55vw"}} src="./assets/Group 274.png" alt="img"    />
                        </div>

                        {commentdiv}
                        {commentdiv}
                        {commentdiv}
                        {commentdiv}
              </div>
            </div>
          </div>
        </div>
    </section>            
        </>
    );
}

export default Community;
