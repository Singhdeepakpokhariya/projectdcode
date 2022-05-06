

export const SubmitHandler = (e,user,password) => {
  // if (userHandler===true || passwordHandler===true ) {
  //   alert("submitted");
  // }
  // e.preventDefault();


  // var raw = JSON.stringify({
  //   phoneNumber: user,
  //   password: password,
  //   source: "web",
  // });

  // var requestOptions = {
  //   method: "POST",
  //   body: raw,
  // };

  // fetch(url, requestOptions)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     if (result["success"]) {
  //       // document.getElementById("message").innerHTML = result["message"];
  //       //todo
  //     } else {
  //       document.getElementById("message").innerHTML = result["message"];

  //     }
  //   })

  //   .catch((error) => alert(error));
};

export const userHandler = (e, SetUser, SetUserErr) => {
  let item = e.target.value;
  // let filter = /^([a-zA-z0-9\_\.\-]+\@(([a-zA-z0-9\-])+\.)+([a-zA-Z0-9]{2,5})+$/;
  // let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (item.includes("@") && /\S+@\S+\.\S+/.test(item)) {
    console.log("pass");
    SetUserErr(false);
  } else if (!isNaN(item) && item.length === 10) {
    console.log("pass num");
    SetUserErr(false);
  } else {
    console.log("err");
    SetUserErr(true);
  }
  SetUser(item);
};

export const passwordHandler = (e, SetPassword, SetPasswordErr) => {
  let item = e.target.value;
  if (item.length < 4) {
    console.log("err");
    SetPasswordErr(true);
  } else {
    console.log("success");
    SetPasswordErr(false);
  }
  SetPassword(item);
};
