import React from "react";
import Sidenav from "../Sidenav";

const MyPayment = () => {
  return (
    <>
      <section
        id="Payment"
        className="d-flex align-items-center  bg-light  "
      >
        <div className="container-fluid mb-5 " >
          <Sidenav />
          <div className="row py-5" >
            <div className="col-10 py-5  mx-auto ">
              <div className="row py-5">

              <div className="moduleHead mt-5   ">    
                  <p className="d-flex justify-content-center align-items-center  " >
                    <span className="bg-light" >&#123;</span>
                    <p className="mt-4 mx-2" >My Payments</p>
                  </p>
              </div>
<div>
              <div className="d-flex flex-column offset-2 "  >
                  <h5  className="my-4 mx-2">Subscriptions</h5>
                  <div className="d-flex flex-column payDetails" >
                      <p className=" py-2  Annual "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Annual Package</p>
                      <div className="d-flex flex-column mx-4" >
                          <div className="d-flex justify-content-between  " ><p>Order Code : AYC1284849VE</p><p>Period : 10 Dec 2020 - 10 Dec 2021</p></div>
                          <p>Inclusions : lorem ipsum, dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt </p>
                          <p>Auto Renewal</p>
                      </div>
                      <div className="d-flex justify-content-between pt-1  InvoiceDetails">
                      <p className="mx-4 mt-1" >Paid : `6,600</p>
                      <p className="mx-4 mt-1 " >View Detailed Invoice</p>
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

export default MyPayment;
