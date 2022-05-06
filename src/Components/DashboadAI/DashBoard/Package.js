import React from "react";
import Sidenav from "../../Sidenav";

const Package = () => {
    const star = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#FDC902" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>

    const check = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4FBBBD" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg>

   const close = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
 </svg>

  return (
    <>
      <section id="package" className="d-flex align-items-center overflow-hidden">
        <div className="container-fluid mb-3 ">
          <Sidenav />

          <div className="row  d-flex ">
            <div className="col-10   mx-auto ">
              <div className="row ">
                <div className="packageD offset-right-1 mt-5">
                <div className="packageDetails mt-5 ">
                        <div className="mx-5 text-center my-5" >
                            <p className="h5"><strong>Unlock the full DcodeAI Experience</strong></p>
                            <p>Get access to all modules, leauges, industry projects and challeneges</p>
                        </div>
                        <div className="d-flex flex-row mx-5 justify-content-center" >
                            <div className="package details1 mx-3 "><p className="pt-4 mx-3">Monthly</p> <p className=" mx-3">` 1499.00/<br /> month</p><span className="py-1 px-2"  >Subscribe</span></div>
                            <div className="package details2 mx-3 " ><span className=" py-1 px-2  "  >Save 66%</span><p className=" mx-3">Anually</p> <p className=" mx-3" >` 499.00/<br /> month</p><span className="py-1 px-2"  >Subscribe</span></div>
                            <div className="package details3 mx-3 " ><p className="pt-4 mx-3">Groups of 3+</p> <p className=" mx-3" >` 9,999.88/<br />  year</p><span className="py-1 px-2"  >Subscribe</span></div>
                        </div>
                        <div ><p className="d-flex justify-content-center my-4 " >Over 10,000 5 star reviews</p></div>
                        <div className="d-flex flex-row reviews mx-5 justify-content-center" >
                            <div className="reviewbox mx-3 " >
                                <p className="pt-2 px-2" >"It’s perfect for everyone - I started on the free version and loved it, so I sent it to my 14 year old son, and his improvement in math was amazing in just 2 weeks!" <br /> - William Clements</p>
                                <p className="mt-0 mx-2 ">{star}&nbsp;{star}&nbsp;{star}&nbsp;{star}&nbsp;</p>
                            </div>
                            <div className="reviewbox mx-3 " >
                                <p className="pt-2 px-2" >"It’s perfect for everyone - I started on the free version and loved it, so I sent it to my 14 year old son, and his improvement in math was amazing in just 2 weeks!" <br /> - William Clements</p>
                                <p className="mt-0 mx-2 ">{star}&nbsp;{star}&nbsp;{star}&nbsp;</p>
                            </div>
                            <div className="reviewbox  mx-3 " >
                                <p className="pt-2 px-2" >"It’s perfect for everyone - I started on the free version and loved it, so I sent it to my 14 year old son, and his improvement in math was amazing in just 2 weeks!" <br /> - William Clements</p>
                                <p className="mt-0 mx-2" >{star}&nbsp;{star}&nbsp;{star}&nbsp;{star}&nbsp;</p>
                            </div>
                            <div className="reviewbox last  mx-3">
                                <p className="pt-2 px-2" >"It’s perfect for everyone - I started on the free version and loved it, so I sent it to my 14 year old son, and his improvement in math was amazing in just 2 weeks!" <br /> - William Clements</p>
                                <p className="mt-0 mx-2 " >{star}&nbsp;{star}&nbsp;{star}&nbsp;{star}&nbsp;{star}&nbsp;</p>
                            </div>                            
                        </div>
                        <div className="d-flex flex-row offset-3 mt-5  ">
                          <div className="d-flex flex-column free">
                            <span className="h6" ><strong>Free</strong></span><hr />
                            <span className="" >New problems every day  <span className="mx-3" style={{float:"right"}} >{check} </span></span><hr />
                            <span className="" >Entire Daily Challenges archive Math, science, and computer science wiki <span className="mx-3" style={{float:"right"}} >{check} </span></span><hr />
                            <span className="" >Synced progress across web and mobile apps Offline mode on mobile apps<span className="mx-3" style={{float:"right"}} >{check} </span></span><hr />
                            <span className="" >Community discussion Guided courses Foundational <span className="mx-3" style={{float:"right"}} >{check} </span></span><hr />
                            <span className="" >math courses Advanced math courses Science <span className="mx-3" style={{float:"right"}} >{close} </span></span><hr />
                            <span className="" >computer Science courses Additional practice <span className="mx-3" style={{float:"right"}} >{close} </span></span>
                            
                          </div>
                          <div className="d-flex flex-column premium mx-4">
                          <span className="h6" ><strong>Premium</strong></span><hr />
                          <span className="" >New problems every day <span  className="mx-3" style={{float:"right"}} >{check}</span> </span><hr />
                          <span className="" >Entire Daily Challenges archive Math, science, and computer science wiki <span className="mx-3" style={{float:"right"}} >{check}</span> </span><hr />
                          <span className="" >Synced progress across web and mobile apps Offline mode on mobile apps <span className="mx-3" style={{float:"right"}} >{close} </span> </span><hr />
                          <span className="" >Community discussion Guided courses Foundational <span className="mx-3" style={{float:"right"}} >{close} </span></span><hr />
                          <span className="" >math courses Advanced math courses Science <span className="mx-3" style={{float:"right"}} >{close} </span></span><hr />
                          <span className="" >computer Science courses Additional practice <span className="mx-3" style={{float:"right"}} >{check} </span></span>
                          </div>
                        </div>
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

export default Package;
