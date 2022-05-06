import React from "react";
import Sidenav from "../Sidenav";


const Setting = () => {

const dailyReminder = <button className="icon-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-bell-fill" viewBox="0 0 16 16">
<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg></button>

const reminderTime = <button className="icon-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-clock-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
</svg></button>

const shareWebProfile = <button className="icon-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
<path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
</svg></button>

const share = <button className="icon-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-share-fill" viewBox="0 0 16 16">
<path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
</svg></button>

const rate = <button className="icon-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></button>

const like = <button className="icon-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg></button>

const Referral = <button className="icon-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-person-fill" viewBox="0 0 16 16">
<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></button>

const ChangePassword = <button className="icon-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-lock-fill" viewBox="0 0 16 16">
<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
</svg></button>

const Unsubscribe =  <button className="icon-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
<path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
</svg></button>
  
  const logOut = <button className="icon-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-power" viewBox="0 0 16 16" >
<path d="M7.5 1v7h1V1h-1z" />
<path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
</svg></button>
  
 const help = <button className="icon-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
 <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg></button> 

const term = <button className="icon-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-pencil-square" viewBox="0 0 16 16">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>

const privacy = <button className="icon-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
</svg></button>


  return (
    <>
      <section
        id="Setting"
        className="d-flex align-items-center overflow-hidden"
      >
        <div className="container-fluid  ">
          <Sidenav />
          <div className="row offset-1 my-4 ">
            <div className="col-10   mx-auto ">
              <div className="row">
                <div className="settingHead my-3 d-flex flex-direction-row  ">
                  <div className="d-flex  ">
                    <p style={{ color: "lightgray" }}>
                       &lt; Back to Profile
                    </p>
                  </div>
                  <p className="my-3 "  >
                    <strong><span style={{fontSize:"2rem"}} >&#125;</span>
                    <span>Settings</span></strong>
                  </p>  
                </div>
                <div className="d-flex flex-direction-row mx-5 settingBody" >
                    <div className="notificationSetting mx-5 my-4 " >
                       <strong><p>Notification</p></strong>
                        <hr/>
                        <div className="d-flex">&nbsp;&nbsp;&nbsp;{dailyReminder}&nbsp;&nbsp;&nbsp;<p>Daily Reminder</p></div>
                        <hr/>
                        <div  className="d-flex" >&nbsp;&nbsp;&nbsp;{reminderTime}&nbsp;&nbsp;&nbsp;<p>Reminder Time</p></div>
                        <hr/>
                        <strong> <p>Share the Love</p></strong>
                        <hr/>
                        <div  className="d-flex" >&nbsp;&nbsp;&nbsp;{shareWebProfile}&nbsp;&nbsp;&nbsp;<p>Share the web profile link</p></div>
                        <hr/>
                        <div  className="d-flex" >&nbsp;&nbsp;&nbsp;{share}&nbsp;&nbsp;&nbsp;<p>Share leaderboard Image</p></div>
                        <hr/>
                        <div  className="d-flex" >&nbsp;&nbsp;&nbsp;{rate}&nbsp;&nbsp;&nbsp;<p>Rate us on App store</p></div>
                        <hr/>
                        <div  className="d-flex" >&nbsp;&nbsp;&nbsp;{like}&nbsp;&nbsp;&nbsp;<p>Like us on</p></div>
                        <hr/>
                        <div  className="d-flex" >&nbsp;&nbsp;&nbsp;{Referral}&nbsp;&nbsp;&nbsp;<p>Referral/Refer Codes system</p></div>
                        <hr/>
                    </div>


                    <div className="accountSetting mx-5 my-4" >
                    <strong><p>Account Setting</p></strong>
                        <hr/>
                        <div className="d-flex" >&nbsp;&nbsp;&nbsp;{ChangePassword}&nbsp;&nbsp;&nbsp;<p>Change Password</p></div>
                        <hr/>
                        <div className="d-flex" >&nbsp;&nbsp;&nbsp;{Unsubscribe}&nbsp;&nbsp;&nbsp;<p>Unsubscribe</p></div>
                        <hr/>
                        <div className="d-flex" >&nbsp;&nbsp;&nbsp;{logOut}&nbsp;&nbsp;&nbsp;<p>Log Out</p></div>
                        <hr/>
                        <strong><p>Contact</p></strong>
                        <hr/>
                        <div className="d-flex"  >&nbsp;&nbsp;&nbsp;{help}&nbsp;&nbsp;&nbsp;<p>Help</p></div>
                        <hr/>
                        <div className="d-flex"  >&nbsp;&nbsp;&nbsp;{term}&nbsp;&nbsp;&nbsp;<p>Term & Condition</p></div>
                        <hr/>
                        <div className="d-flex"  >&nbsp;&nbsp;&nbsp;{privacy}&nbsp;&nbsp;&nbsp;<p>Privacy Policy</p></div>
                        <hr/>
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

export default Setting;
