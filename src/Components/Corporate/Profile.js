import React from "react";
import Sidenav from "../Sidenav";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Projectsdetails = () => {

  // const navigate = useHistory();

  
  // function gotologinpage(){
  //   navigate.push('/')
  // }
  // document.querySelector('.lg').addEventListener('click',gotologinpage)


  const iconbtn = (
    <button className="icon-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="gray"
        className="bi bi-pencil"
        viewBox="0 0 16 16"
      >
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
      </svg>
    </button>
  );

  const ChangePassword = (
    <button className="icon-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="gray"
        class="bi bi-lock-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
      </svg>
    </button>
  );
  const Unsubscribe = (
    <button className="icon-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="gray"
        class="bi bi-box-arrow-up-right"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
        />
        <path
          fillRule="evenodd"
          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
        />
      </svg>
    </button>
  );
  const logOut = (
    <button className="icon-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="gray"
        class="bi bi-power"
        viewBox="0 0 16 16"
      >
        <path d="M7.5 1v7h1V1h-1z" />
        <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
      </svg>
    </button>
  );

  const setting = (
    <button id="btn-setting"  style={{ marginLeft: "65vw" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="gray"
        class="bi bi-gear-fill"
        viewBox="0 0 16 16"
      >
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
      </svg>
    </button>
  );

  return (
    <>
      <section
        id="Profile"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid  ">
          <Sidenav />
          <div className="row offset-1">
            <div className="col-10 my-4  mx-auto ">
              <div className="row">
                <div className="module_name my-2 d-flex flex-direction-row justify-content-between ">
                  <Link to='/Setting' > {setting} </Link>
                </div>

                <div className="d-flex flex-direction-row">
                  <div
                    className="mx-3  profilehead "
                  >
                    <div className="d-flex flex-direction-row  profilepic">
                      <div className="Profile d-flex flex-direction-row  ">
                        <span className="bracket" id="open">
                          &#123;
                        </span>
                        <img
                          className=" mx-3  "
                          style={{ height: "15vh", width: "7vw" }}
                          src="./assets/Group 111.png"
                          alt="img"
                        />
                        <span className="bracket" id="close">
                          &#125;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-direction-row mx-3 ">
                  <div className="edit-options mx-3 my-4">
                    <h5 className="mb-2">Company's Name</h5>
                    <div className="d-flex justify-content-between">
                      <p>
                        Exercitation non dolor in voluptate eiusmod sint dolore
                        ut deserunt do voluptate consequat exercitation esse.
                        Aliquip Lorem esse reprehenderit ullamco do id
                        adipisicing anim cillum consectetur sint ad cillum.
                      </p>
                      {iconbtn}
                    </div>
                    <div className="d-flex justify-content-between ">
                      <p>Email</p>
                      {iconbtn}
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Mobile Number</p>
                      {iconbtn}
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Person of Contact</p>
                      {iconbtn}
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Person Contact</p>
                      {iconbtn}
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Persons Email</p>
                      {iconbtn}
                    </div>
                  </div>

                  <div className="vl mx-3 my-3 "></div>

                  <div className=" edit-social mx-3 my-4">
                    <h5 className="mb-2">Account Setting</h5>
                    <div className="d-flex">
                      
                      {ChangePassword}&nbsp;&nbsp;&nbsp;<p>Change Password</p>
                    </div>
                    <div className="d-flex ">
                      {Unsubscribe}&nbsp;&nbsp;&nbsp;<p>Unsubscribe</p>
                    </div>
                    <div className="d-flex">
                      {logOut}&nbsp;&nbsp;&nbsp;<p className="lg" >Log Out</p>
                    </div>
                    <div className="Allsettings">
                      <Link to = "/Setting" className="settinglink">View all Settings</Link>
                    </div>
                  </div>
                </div>

                <div>
                  <button className="btn-save" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projectsdetails;
