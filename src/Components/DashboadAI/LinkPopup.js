import React from 'react';
import Sidenav from "../Sidenav";


const Linkpopup = () => {
    return (
        <>
            <section id="linkPopup" className="d-flex align-items-center">
                <div className="container-fluid mb-3 ">
                <Sidenav />

                <div className="row  offset-2 d-flex ">
                    <div className="col-10  mx-auto ">
                    <div className="row ">

                    <div className='mt-5' >
                        <div className='d-flex flex-column bg-light referal popup ' >
                            <p className='my-3' >Below is your referal link<br />share and get rewards</p>
                            <p>https://www.figma.com/file/<br />
                                WNLjSFG88qCAq4IQTOBfio/dcodeaicode?node-id=0%3A1</p>
                            <div className='d-flex mx-5 ' >
                                <button className='mx-5 px-1 py-1 'id='Copylink' > Copy Link</button> 
                                <button className='mx-5 px-1 py-1'id='Sharelink' > Share Link</button> 
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
}

export default Linkpopup;
