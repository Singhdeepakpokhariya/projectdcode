import React from "react";
import Sidenav from "../Sidenav";

const Discussion = () => {
  return (
    <>
      <section id="Invoice" className="d-flex align-items-center">
        <div className="container-fluid mb-3 ">
          <Sidenav />

          <div className="row  offset-2  ">
            <div className="col-10   mx-auto ">
              <div className="row ">
                
                <div className="Payinvoice  d-flex flex-direction-row justify-content-between mt-4 ">
                  <div className="d-flex flex-direction-column  ">
                    <p style={{ color:"lightgray" }}>
                      &gt;Back to Accounts
                    </p>
                  </div>
                </div>

                <div>
                    
                    <div className="d-flex flex-row mt-3 ">
                        <div className="billing mx-5 " > <p>Invoice No. 330993</p> <p>DcodeAI</p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br /> Ph : <br />GSTN : </p> </div>
                        <div className="billingDetails mx-5 " > <p>Billed On : 10.12.2020</p> <p>Billed To</p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed  India</p></div>
                        <div className= "amountDetails mx-4 mt-5" ><p className="mb-0 " >&nbsp;Paid</p> <p>`6,600</p></div>
                    </div>

                
                    <div className="d-flex flex-column" >
                        <div className="d-flex flex-row justify-content-between  mx-5 productDetail " >
                            <p className="mx-2 py-2" >Product</p>
                            <p className="mx-2 py-2">Price</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between  my-1 mx-5 productDetail ">
                            <p className="mx-2 py-2" >Annual Package</p>
                            <p className="mx-2 py-2">`499x12</p>
                        </div>
                        <div className="mx-5 productDetail pricing ">
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
                        <div className="my-1 mx-5 productDetail ">
                        <div className="d-flex justify-content-end ">
                            <p className="mx-2 py-2" >Total</p>
                            <p className="mx-2 py-2">&nbsp;&nbsp;&nbsp;`6,600</p>
                        </div>
                        </div>                   
                    </div>

                    <div className="mx-5 my-4" >
                        <p>Payment </p>
                        <p  >`6,000 Payment from Visa *****9485</p>
                        <p className="my-3" >Notes</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy  nibh <br /> euismod tincidunt ut laoreet dolore magna aliquam </p>
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

export default Discussion;
