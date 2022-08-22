import React from "react";
import { useHistory, Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import { useState } from "react";
import { userHandler, passwordHandler, SubmitHandler } from "./Handler.js";
import { useCreatePostMutation } from "../Services/Post";
// import { useHistory } from "react-router-dom";

function Form1() {
  const navigate = useHistory();

  // console.log(props)
  // const {handleSubmit} = props
  const [userErr, SetUserErr] = useState(false);
  const [user, SetUser] = useState("");
  const [password, SetPassword] = useState("");
  const [passwordErr, SetPasswordErr] = useState(false);

  // const history = useHistory();

  // let data = sessionStorage.getItem('accessToken');
  // sessionStorage.clear();

  //  const url =  "https://liveapi.dcodeai.com/users/studentLogin/login";

  const newPost = {
    phoneNumber: user,
    password: password,
    source: "web",
  };

  //  async function SubmitHandler(event){
  //   event.preventDefault();
  //   {
  //     await Auth.signIn(phoneNumber , password);
  //   userHasAuthenticated(true);
  //   history.push("/dashbord");
  //    }
  // }

  function gotodashboard() {
    navigate.push("/Dash");
  }

  // const responseInfo = useGetALLPostQuery()
  const [createPost, responseInfo] = useCreatePostMutation(newPost);
  if (responseInfo.isSuccess) {
    gotodashboard();
    sessionStorage.setItem("accessToken", responseInfo.data.accessToken);
    console.log("Response Information", responseInfo.data.accessToken);
    console.log("Data", responseInfo.data);
    console.log("Success", responseInfo.isSuccess);
  }

  if (responseInfo.isLoading) {
    document.getElementById("message").innerHTML = "loading...";
  }
  if (responseInfo.isError) {
    document.getElementById("message").innerHTML =
      "Invalid Credentials Check again";
  }

  let error = responseInfo.isError;
  if (error) {
    document.getElementById("message").style.display = "block";
  }
  setTimeout(function () {
    document.getElementById("message").style.display = "none";
  }, 5000);

  //  else{
  //   document.getElementById("message").style.display ="block";
  // }

  // if(responseInfo.isError) return <h1  >An error occured{responseInfo.error.error}</h1>

  return (
    <>
      <form
      //  onSubmit={(e)=> SubmitHandler(e,user,password)}
      // onSubmit={()=>SubmitHandler(createPost(newPost))}
      // onSubmit={handleSubmit((formValues)=>{
      //   console.log(formValues)
      // })}
      >
        <img src="./assets/Group 100.png" alt="img" />
        <h2>Sign In</h2>

        <div>
          <p
            className="text-center pt-1 option Individuals"
            type="text"
            placeholder="As Individuals"
          >
            As Individuals
          </p>
          <p
            className="text-center pt-1   option  School "
            type="text"
            placeholder="As Schools"
          >
            <Link
              className="text-decoration-none "
              style={{ color: "grey" }}
              to="/Student"
            >
              As Schools
            </Link>
          </p>
        </div>
        <label>
          {" "}
          <input
            className="inputarea"
            name="Phone Number"
            type="text"
            placeholder="Email/Mobile"
            // component="input"
            onChange={(user) => userHandler(user, SetUser, SetUserErr)}
          />
        </label>
        <br />
        {userErr ? <span>Input proper name</span> : ""}
        <br />
        <label>
          <input
            className="inputarea"
            name="Password"
            type="password"
            placeholder="Password"
            // component="input"
            onChange={(password) =>
              passwordHandler(password, SetPassword, SetPasswordErr)
            }
          />
        </label>
        <br />
        {passwordErr ? <span>Input proper password</span> : ""}
        <br />

        <label>
          <input className="checkbox" type="checkbox" />
          Remember me &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Forgot your
          password
        </label>
        <br />
        <input
          onClick={() => SubmitHandler(createPost(newPost))}
          // onClick={gotodashboard}
          className="mt-3 login-btn"
          type="button"
          value="Login"
        />
        <hr className="formhr" />

        <div className="loginoption">
          <label className="mt-1 p-1 fb">
            <img src="./assets/Group 105.png" alt="img" />
            <span>Sign Up / Sign in with Facebook</span>
          </label>
          <label className="mt-2 p-1 fb">
            <img src="./assets/Group 107.png" alt="img" />
            <span> Sign Up / Sign In with Google</span>
          </label>
        </div>
        <div className="createnew">
          <br />
          <p>To create and account signup</p>
          <p> sign in Corporate</p>
        </div>
      </form>
    </>
  );
}

export default reduxForm({
  form: "myForm",
})(Form1);
