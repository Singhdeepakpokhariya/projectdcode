import React from 'react';

const Popup = () => {
    return (
        <>
          <div  id="doubtsession" className="modal modal-sheet position-static d-block  py-5" tabIndex="-1" role="dialog" >
  <div className="modal-dialog " role="document">
    <div className="content rounded-6 shadow bg-warning ">
      <div className="modal-header border-bottom-0">
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="body py-0 text-center ">
        <p> Schedule a <br/>
           <strong>1:1 Live Doubt Clearing Session</strong>  <br/>
            with our experts</p>
      </div>

      <div className="footer  d-flex  flex-row mt-2 ">
      <img  className='mx-2 ' style={{height:"25vh",width:"15vw"}} src="./assets/Group 103.png" alt="img"    />
      <div className=' d-flex  flex-column mx-1' >
      <button type="button" className="btn btn-danger" >Book Now</button>
      <img  className='mt-3 ' style={{height:"15vh",width:"10vw"}} src="./assets/Group 397.png" alt="img"    />
      </div>
       
      </div>
    </div>
  </div>
</div>  
<div  id="bot" className="modal modal-sheet position-static d-block  py-5" tabIndex="-1" role="dialog" >
<div className="botbody py-0 text-center ">
      <button type="button"  className="btn-close close" data-bs-dismiss="modal" aria-label="Close"></button>
      <img  className='mt-3 botimg ' style={{height:"50vh",width:"28vw"}} src="./assets/Group 398.png" alt="img"    />
  </div>
</div>  



        </>
    );
}

export default Popup;
