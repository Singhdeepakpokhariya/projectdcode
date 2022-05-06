import React from "react";
import {  useHistory, Link } from "react-router-dom";
import { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { userHandler, passwordHandler ,SubmitHandler } from "./Handler.js";
import { useCreatePostMutation } from "../Services/Post";
// import { useHistory } from "react-router-dom";


function Form() {

  const navigate = useHistory();

  const [userErr, SetUserErr] = useState(false);
  const [user, SetUser] = useState("");
  const [password, SetPassword] = useState("");
  const [passwordErr, SetPasswordErr] = useState(false);
  // const history = useHistory();


  //  const url =  "https://liveapi.dcodeai.com/users/studentLogin/login";
  const newPost = {
    phoneNumber: user,
    password: password,
    source: "web",
  };

  // async function SubmitHandler(event) {
  //   {
  //     await user.signIn(user, password);
  //     user(true);
  //     history.push("/dashbord");
  //   }
  // }
  function gotodashboard(){
    navigate.push("/Cororate"); 
   }

  // const responseInfo = useGetALLPostQuery()
  const [createPost, responseInfo] = useCreatePostMutation(newPost);
  if(responseInfo.isSuccess){
    gotodashboard();
  sessionStorage.setItem('accessToken',responseInfo.data.accessToken);
  // console.log("Response Information", responseInfo.data.accessToken)
  // console.log("Data", responseInfo.data)
  // console.log("Success", responseInfo.isSuccess)
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

  return (
    <>
      <form
      //  onSubmit={(e)=> SubmitHandler(e,user,password,url)}
      >
        <img src="./assets/Group 100.png" alt="img" />
        <h2>Sign In</h2>
        <p
          className="pt-1 option Individuals"
          type="text"
          placeholder="As Individuals"
        >
          <Link
            to="/"
            className="text-decoration-none "
            style={{ color: "grey" }}
          >
            As Individuals
          </Link>
        </p>
        <p className="pt-1 option School" type="text" placeholder="As Schools">
          As Schools
        </p>
        <Field
          className="inputarea"
          type="text"
          name="Phone number"
          component="Input"
          placeholder="Email/Mobile"
          onChange={(e) => userHandler(e, SetUser, SetUserErr)}
        />
        <br />
        {userErr ? <span>Input proper name</span> : ""}
        <br />
        <Field
          className="inputarea"
          type="password"
          placeholder="Password"
          name="Password"
          component="Input"
          onChange={(e) => passwordHandler(e, SetPassword, SetPasswordErr)}
        />
        <br />
        {passwordErr ? <span>Input proper password</span> : ""}
        <br />
        <br />
        <label>
          <input className="checkbox" type="checkbox" />
          Remember me &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Forgot your
          password
        </label>
        <br />
        <input
          onClick={() => SubmitHandler(createPost(newPost))}
          type="button"
          className="mt-3 login-btn"
          value="login"
        />
      </form>
    </>
  );
}

export default reduxForm({
  form: "myForm",
})(Form);
