import React from "react";
import Sidenav from "../../Sidenav";

const OrderConfirmation = () => {
  return (
    <>
      <section
        id="Dashheader"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid bg-light " >
          <Sidenav />
          <div className="row my-5 " >
            <div className="col-10 my-5  mx-auto ">
              <div className="row my-5 ">

              <div className="moduleHead    ">    
                  <p className="d-flex justify-content-center align-items-center  " >
                    <span className="bg-light" >&#123;</span>
                    <p className="mt-4 mx-2" >Order Confirmation</p>
                  </p>
              </div>


            <div className="d-flex  flex-row justify-content-center" >
                <div className="d-flex flex-column" >
                        <div className="d-flex flex-row justify-content-between my-1  offset-1 productDetails price" >
                            <h5 className="mx-2 py-2" >Product</h5>
                            <h5 className="mx-2 py-2">Price</h5>
                        </div>
                        <div className="d-flex flex-row justify-content-between  my-1 offset-1 productDetails ">
                            <h5 className="mx-2 py-2" >Annual Package</h5>
                            <h6 className="mx-2 py-2">`499x12</h6>
                        </div>
                        <div className=" my-1 offset-1 productDetails pricing ">
                            <div className="d-flex justify-content-end mt-2 ">
                            <p className="h6 mx-2 " >Subtotal</p>
                            <p className="h6 mx-2 ">6,000</p>
                            </div>
                            <div className="d-flex justify-content-end ">
                            <p className="h6 mx-2 " >Tax 10%</p>
                            <p className="h6 mx-2 ">&nbsp;&nbsp;&nbsp;600</p>
                            </div>
                            <div className="d-flex justify-content-end ">
                            <p className="h6 mx-2 " >Discount</p>
                            <p className="h6 mx-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</p>
                            </div>
                        </div>
                        <div className="  my-1 offset-1 productDetails ">
                        <div className="d-flex justify-content-end ">
                            <h5 className="mx-2 py-2" >Total</h5>
                            <h6 className="mx-2 py-2">&nbsp;&nbsp;&nbsp;`6,600</h6>
                        </div>
                        </div>    
                </div>

               

            <div className="d-flex flex-column offset-1">
                  <div className="d-flex flex-row" ><input id='refcodeinput' type='text' placeholder="    Apply Referal/ Coupon Code"  /><button id='apply' className="px-4 mx-2" >Apply</button></div>
                  
                  <div className=" d-flex flex-row mt-2 pt-4 px-3 packageInfo"  >
                    <div className=" d-flex flex-column py-2 ">  <p>Package Information</p>
                      <p>Get access to all modules,<br /> all courses, leauges, industry <br /> projects and challeneges <br /> for 12 month and become <br /> an expert</p></div>
                  <div className="d-flex align-items-end mx-3" >
                  <img  className='' style={{height:"10vh",width:"4vw"}} src="./assets/Group 187.png" alt="img"    />
                  </div>
                  
                  </div>
                </div>

            </div>
            <div className="d-flex justify-content-center my-5" ><button id='confirm' className="px-4 py-1">Confirm</button></div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderConfirmation;
