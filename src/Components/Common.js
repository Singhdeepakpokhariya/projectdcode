import React from "react";



const Common = (props) => {
 
 
  return (
    <div  style={{background:"#0070BB"}}> 
     <div id="message"  ></div>
      <section id="header" className="d-flex align-items-center"  style={{background:"#0070BB"}} >
      
        <div className="container-fluid ">
          <div className="row "  >
            <div className="col-12  mx-auto">
              <div className="row d-flex  align-items-center  flex-row   " >
                  <div className="col-md-6 pt-5 pt-lg-0 order-1 offset-1    order-lg-1 order-sm-1 d-flex justify-content-start flex-column " style={{height:"100%"}} >
                  
                    <h1  style={{color:"yellow",marginBottom:"30px"}} ><strong className="brand-name" >  Learn AI for free,<br/> signup for 7 days Trail.</strong></h1>
                    <h5 className="my-3 "  style={{color:"white"}}  > Now learning coding with Python, Machine Learning <br /> and Data Science is easy, like never before</h5>

                    <div className=" col-md-12 mt-3   d-flex flex-wrap flex-sm-wrap  justify-content-around flex-row order-sm-3 order-2 "style={{height:"100%",color:"white"}} >
                        <div className="col-md-3 mt-4 text-center order-sm-0 " >  
                            <img className="phone  " src="./assets/Group 59.png" alt="img"  /> 
                            <p style={{fontSize:"20px" }}  >Easy Modules & <br /> Live Projects</p> 
                        </div>
                        <div className="col-md-3 mt-4 text-center order-sm-2 " > 
                            <img id="bonusimg" src="./assets/Group 75.png" alt="img"   />
                            <p  style={{fontSize:"20px"}} >Bonus Coins & <br /> Subscriptions</p>
                        </div>
                        <div className="col-md-3 mt-4 text-center order-sm-1 " > 
                            <img  className="phone" src="./assets/Group 84.png" alt="img"  />
                            <p  style={{fontSize:"20px"}}>AI-Enabled <br /> Buddy Doru & 1:1 <br />Live Doubt <br />Clearing <br /> Sessions</p>
                        </div>
                        <div className="col-md-3  mt-4 text-center order-sm-3  " > 
                            <img id="tab"  src="./assets/Group 78.png" alt="img" />
                            <p  style={{fontSize:"20px"}}>DIY Modules</p>
                        </div>                                
                    </div> 
                   
                  </div>
                  <div className="  col-xs-8  col-sm-8  col-md-4  order-1 order-lg-2 order-sm-2 justify-content-start header-img">
                   {props.formpart}

                  </div>
                 
                  </div>           
                 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
